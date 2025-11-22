// import React, { useState } from 'react';
// import axios from 'axios'; // or use fetch
//
// function PythonInsert() {
//     const [title, setTitle] = useState('');
//     const [subtitle, setSubtitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [link, setLink] = useState('');
//     const [image, setImage] = useState('');
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:3000/api/users', { title, subtitle });
//             console.log('Data inserted:', response.data);
//             // Optionally, clear form or show success message
//             setTitle('');
//             setSubtitle('');
//             setDescription('');
//             setLink('');
//             setImage('');
//         } catch (error) {
//             console.error('Error inserting data:', error);
//             // Handle error, show error message
//         }
//     };
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
//             <input type="subtitle" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} placeholder="Subtitle" />
//             <input type="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
//             <input type="link" value={link} onChange={(e) => setLink(e.target.value)} placeholder="Link" />
//             <input type="image" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image"  alt={"screenshot"}/>
//             <button type="submit">Submit</button>
//         </form>
//     );
// }
//
// export default PythonInsert;