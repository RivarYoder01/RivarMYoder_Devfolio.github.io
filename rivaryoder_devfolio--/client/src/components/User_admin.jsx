import React, { useState } from 'react';

export default function UserAdminForm() {
    const [form, setForm] = useState({
        profile_image: '',
        resume: '',
        about: '',
        resume_file: null
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'resume_file') {
            setForm(prev => ({ ...prev, resume_file: files[0] || null }));
        } else {
            setForm(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            let res;
            if (form.resume_file) {
                // Send multipart/form-data when a file is present
                const fd = new FormData();
                fd.append('profile_image', form.profile_image);
                fd.append('about', form.about);
                fd.append('resume_file', form.resume_file); // file field
                // optionally keep resume text field too:
                fd.append('resume', form.resume);

                res = await fetch('http://localhost:8080/userAdmin', {
                    method: 'POST',
                    body: fd // do NOT set Content-Type header
                });
            } else {
                // Fallback: send JSON when no file
                const payload = {
                    profile_image: form.profile_image,
                    resume: form.resume || null,
                    about: form.about || null
                };
                res = await fetch('http://localhost:8080/userAdmin', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
            }

            if (!res.ok) {
                const text = await res.text().catch(() => null);
                console.error('Server error:', res.status, text);
                alert('Failed to submit: ' + (text || res.status));
            } else {
                console.log('Submitted');
                alert('Admin Updated');
                // reset form
                setForm({ profile_image: '', resume: '', about: '', resume_file: null });
            }
        } catch (err) {
            console.error('Network error:', err);
            alert('Network error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-emerald-950 rounded-lg p-6 m-5 mr-4 ml-4 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
            <h2 className="text-2xl font-semibold text-yellow-500 mb-6">Update User Information</h2>

            <div>
                <label className="block text-sm font-medium text-white mb-1 mt-2">Profile Image</label>
                <input name="profile_image" value={form.profile_image} onChange={handleChange}
                       className="block w-full rounded-md border border-gray-300 bg-green-50 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" placeholder="Profile Image" />
            </div>

            <div>
                <label className="block text-sm font-medium text-white mb-1 mt-2">Resume (URL or upload PDF)</label>
                <input name="resume_file" type="file" accept="application/pdf" onChange={handleChange} className="block w-full rounded-md border border-gray-300 bg-green-50 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>

            <div>
                <label className="block text-sm font-medium text-white mb-1 mt-2">About</label>
                <textarea name="about" value={form.about} onChange={handleChange} rows="4"
                          className="block w-full rounded-md border border-gray-300 bg-green-50 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" placeholder="About" />
            </div>

            <div className="flex items-center justify-end pt-5">
                <button type="submit" disabled={loading}
                        className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-green-700 disabled:opacity-60">
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </div>
        </form>
    );
}