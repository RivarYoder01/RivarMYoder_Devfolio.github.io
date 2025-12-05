import React, { useState } from 'react';
import axios from "axios";

export default function WebdevDeleteForm() {
    async function updateWebdev() {
        try {
            const response = await axios.get('http://localhost:8080/update_webdev_projects');
            const webdevDataArray = response.data;
            console.log('Project:', webdevDataArray);
        } catch (error) {
            console.error('Error fetching data with Axios:', error);
        }
    }
    const [form, setForm] = useState({
        title: '',
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
        };

        setLoading(true);
        try {
            const res = await fetch('http://localhost:8080/webdev_delete', {
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
                console.log('Deleted:', data);
                alert('Project Deleted');
                await updateWebdev();
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
        <form className='max-w-2xl mx-auto bg-emerald-950  rounded-lg p-6 space-y-6 m-5 mr-4 ml-4 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105' onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold text-yellow-500">Delete Webdev Project</h2>
            <div>
                <label className= 'block text-sm font-medium text-white mb-1'>Title <span className="text-red-500">*</span></label>
                <input name="title" value={form.title} onChange={handleChange} className="block w-full rounded-md border border-gray-300 bg-green-50 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
            <div className= 'flex items-center justify-end space-x-3'>
                <button type="delete" disabled={loading} className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-green-700 disabled:opacity-60">
                    {loading ? 'Deleting...' : 'Delete Project'}
                </button>
            </div>
        </form>

    );
}
