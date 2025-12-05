// server/routes/users.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const db = require('../db');

const upload = multer({
    dest: path.join(__dirname, '..', 'public', 'uploads'),
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});

// PUT /users/:id
router.put('/users/:id', upload.single('resume'), async (req, res) => {
    const userId = req.params.id;
    const body = req.body; // fields sent as form fields or JSON
    const file = req.file;

    try {
        // optional: fetch existing row to remove old file if replaced
        if (file) {
            const [rows] = await db.execute('SELECT resume FROM bigraphy WHERE id = 1', [userId]);
            if (rows.length && rows[0].resume) {
                const oldPath = path.join(__dirname, '..', 'public', rows[0].resume.replace(/^\//, ''));
                if (fs.existsSync(oldPath)) {
                    fs.unlinkSync(oldPath);
                }
            }
        }

        const fields = [];
        const values = [];

        // Accept whichever columns you have in your `users` table
        const updatable = ['name', 'email', 'title', 'description', 'location']; // example columns
        updatable.forEach(col => {
            if (Object.prototype.hasOwnProperty.call(body, col) && body[col] !== undefined && body[col] !== '') {
                fields.push(`${col} = ?`);
                values.push(body[col]);
            }
        });

        if (file) {
            // store relative URL for public serving
            const publicPath = `/uploads/${file.filename}`;
            fields.push('resume_url = ?');
            values.push(publicPath);
        }

        if (fields.length === 0) {
            return res.status(400).json({ error: 'No fields to update' });
        }

        values.push(userId);
        const sql = `UPDATE users SET ${fields.join(', ')} WHERE id = ?`;
        await db.execute(sql, values);
        return res.json({ success: true });
    } catch (err) {
        console.error('Update user error', err);
        return res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
