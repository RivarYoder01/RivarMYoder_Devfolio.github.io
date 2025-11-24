// javascript
import React, { useState } from 'react';
import axios from "axios";

export default function PythonAdminForm() {
    async function updatePython() {
        try {
            const response = await axios.get('http://localhost:8080/update_python_projects');
            const pythonDataArray = response.data;
            console.log('Data loaded into array:', pythonDataArray);
        } catch (error) {
            console.error('Error fetching data with Axios:', error);
        }
    }

    const [form, setForm] = useState({
        title: '',
        subtitle: '',
        description: '',
        link: '',
        image: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.title.trim()) {
            return alert('Title is required');
        }

        const payload = {
            title: form.title,
            subtitle: form.subtitle || null,
            description: form.description || null,
            link: form.link || null,
            image: form.image || null,
            author: 1
        };

        setLoading(true);
        try {
            const res = await fetch('http://localhost:8080/pythonAdmin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!res.ok) {
                const text = await res.text().catch(() => null);
                console.error('Server error:', res.status, text);
                alert('Failed to submit: ' + (text || res.status));
            } else {
                const data = await res.json().catch(() => null);
                console.log('Inserted:', data);
                alert('Project added');
                await updatePython();
                setForm({ title: '', subtitle: '', description: '', link: '', image: '' });
            }
        } catch (err) {
            console.error('Network error:', err);
            alert('Network error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className='bg-white' onSubmit={handleSubmit}>
            <div>
                <label>Title (required)</label>
                <input name="title" value={form.title} onChange={handleChange} />
            </div>
            <div>
                <label>Subtitle</label>
                <input name="subtitle" value={form.subtitle} onChange={handleChange} />
            </div>
            <div>
                <label>Description</label>
                <textarea name="description" value={form.description} onChange={handleChange} />
            </div>
            <div>
                <label>Link</label>
                <input name="link" value={form.link} onChange={handleChange} />
            </div>
            <div>
                <label>Image URL</label>
                <input name="image" value={form.image} onChange={handleChange} />
            </div>
            <button type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    );
}
