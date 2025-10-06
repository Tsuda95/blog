import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Admin() {
  // All posts
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null); // post being edited
  const [message, setMessage] = useState('');

  // Create form state
  const [createTitle, setCreateTitle] = useState('');
  const [createContent, setCreateContent] = useState('');

  // Edit form state
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  // Fetch all posts
  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/posts');
      setPosts(res.data);
    } catch (err) {
      console.error(err);
      setMessage('Failed to fetch posts.');
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Select a post to edit
  const selectPostForEdit = (post) => {
    setSelectedPost(post);
    setEditTitle(post.title);
    setEditContent(post.content);
  };

  // Handle creating a new post
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

      const res = await axios.post('http://localhost:5000/api/posts', {
        title: createTitle,
        content: createContent,
        password: adminPassword
      });

      if (res.data.success) {
        setMessage('Post created successfully!');
        setCreateTitle('');
        setCreateContent('');
        fetchPosts();
      } else {
        setMessage('Failed to create post.');
      }
    } catch (err) {
      setMessage('Error: ' + (err.response?.data?.error || err.message));
    }
  };

  // Handle editing an existing post
const handleEdit = async (e) => {
  e.preventDefault();
  if (!selectedPost) return;

  try {
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD; // frontend env

    const res = await axios.put(`http://localhost:5000/api/posts/${selectedPost.id}`, {
      title: editTitle,
      content: editContent,
      password: adminPassword
    });

    if (res.data.success) {
      setMessage('Post updated successfully!');
      setSelectedPost(null);
      setEditTitle('');
      setEditContent('');
      fetchPosts();
    } else {
      setMessage('Failed to update post.');
    }
  } catch (err) {
    setMessage('Error: ' + (err.response?.data?.error || err.message));
  }
};

  return (
    <div>
      <h1>Admin Panel</h1>
      {message && <p>{message}</p>}

      {/* Create New Post Form */}
      <h2>Create New Post</h2>
      <form onSubmit={handleCreate}>
        <input
          type="text"
          placeholder="Post Title"
          value={createTitle}
          onChange={e => setCreateTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Post Content"
          value={createContent}
          onChange={e => setCreateContent(e.target.value)}
          required
        />
        <button type="submit">Create Post</button>
      </form>

      {/* List of Existing Posts */}
      <h2>Edit Existing Post</h2>
      <ul>
        {posts.map(p => (
          <li key={p.id}>
            {p.title}{" "}
            <button type="button" onClick={() => selectPostForEdit(p)}>Edit</button>
          </li>
        ))}
      </ul>

      {/* Edit Form */}
      {selectedPost && (
        <form onSubmit={handleEdit} style={{ marginTop: '20px' }}>
          <h3>Editing: {selectedPost.title}</h3>
          <input
            type="text"
            placeholder="Post Title"
            value={editTitle}
            onChange={e => setEditTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Post Content"
            value={editContent}
            onChange={e => setEditContent(e.target.value)}
            required
          />
          <button type="submit">Save Changes</button>
          <button type="button" onClick={() => setSelectedPost(null)}>Cancel</button>
        </form>
      )}
    </div>
  );
}
