import { useState } from 'react';
import axios from 'axios';

export default function Admin() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/posts', {
        title,
        content,
        password
      });

      if(res.data.success) {
        setMessage('Post created successfully!');
        setTitle('');
        setContent('');
        setPassword('');
      } else {
        setMessage('Failed to create post.');
      }
    } catch (err) {
      setMessage('Error: ' + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div>
      <h1>Admin: Create Blog Post</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Post Content"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
