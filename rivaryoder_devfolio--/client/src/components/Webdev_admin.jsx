// javascript
import React, { useState } from 'react';
import axios from "axios";

export default function WebdevAdminForm() {
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
            const res = await fetch('http://localhost:8080/webdevAdmin', {
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
        <form
            className="max-w-2xl mx-auto bg-emerald-950  rounded-lg p-6 m-5 mr-4 ml-4 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
            onSubmit={handleSubmit}
        >
            <h2 className="text-2xl font-semibold text-yellow-500 mb-6">Add Webdev Project</h2>

            <div>
                <label className="block text-sm font-medium text-white mb-1">
                    Website/App Title <span className="text-red-500">*</span>
                </label>
                <input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 bg-green-50 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Project title"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-white mb-1 mt-2">Languages or Platform</label>
                <input
                    name="subtitle"
                    value={form.subtitle}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 bg-green-50 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="HTML, CSS, JavaScript, Figma, Wordpress Avada, ect."
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-white mb-1 mt-2">Description</label>
                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows="4"
                    className="block w-full rounded-md border border-gray-300 bg-green-50 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-y"
                    placeholder="Super snazy tazy project"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-5">
                <div>
                    <label className="block text-sm font-medium text-white mb-1 mt-2">Link</label>
                    <input
                        name="link"
                        value={form.link}
                        onChange={handleChange}
                        className="block w-full rounded-md border border-gray-300 bg-green-50 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="https://..."
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-white mb-1 mt-2">Image URL</label>
                    <input
                        name="image"
                        value={form.image}
                        onChange={handleChange}
                        className="block w-full rounded-md border border-gray-300 bg-green-50 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="https://..."
                    />
                </div>
            </div>

            <div className="flex items-center justify-end space-x-3">
                <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-green-700 disabled:opacity-60"
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </div>
        </form>
    );
}
