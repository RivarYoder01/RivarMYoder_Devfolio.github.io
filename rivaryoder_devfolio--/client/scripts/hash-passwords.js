// javascript
/* eslint-env node */
import mysql from 'mysql';
import util from 'util';
import bcrypt from 'bcrypt';

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'l0ck3d',
    database: 'mydb'
});
const query = util.promisify(pool.query).bind(pool);

(async () => {
    try {
        const users = await query('SELECT admin_id, username, password FROM users');
        console.log(`Found ${users.length} users`);
        const saltRounds = 5;
        for (const u of users) {
            const pw = u.password || '';
            if (/^\$2[aby]\$/.test(pw)) {
                console.log(`Skipping hashed user: ${u.username}`);
                continue;
            }
            if (!u.admin_id) {
                console.warn(`Skipping user with missing admin_id: ${u.username}`);
                continue;
            }
            console.log(`Hashing password for: ${u.username}`);
            const hashed = await bcrypt.hash(pw, saltRounds);
            const result = await query('UPDATE users SET password = ? WHERE admin_id = ?', [hashed, u.admin_id]);
            console.log(`Updated user ${u.username}: affectedRows=${result.affectedRows}`);
        }
        console.log('Migration complete');
    } catch (err) {
        console.error('Migration error:', err);
    } finally {
        pool.end();
    }
})();
