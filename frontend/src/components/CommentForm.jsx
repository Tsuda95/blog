import { useState } from 'react';
import axios from 'axios';

export default function CommentForm({ postId }) {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/comments', { post_id: postId, name, content });
    setName('');
    setContent('');
    window.location.reload(); // Simple reload to see new comment
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" required />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Comment" required />
      <button type="submit">Submit Comment</button>
    </form>
  );
}
