import { useEffect, useState } from 'react';
import axios from 'axios';
import CommentForm from '../components/CommentForm';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/posts');
      setPosts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchComments = async (postId) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/comments/${postId}`);
      setComments(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (selectedPost) fetchComments(selectedPost.id);
  }, [selectedPost]);

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(p => (
          <li key={p.id} onClick={() => setSelectedPost(p)} style={{ cursor: 'pointer' }}>
            {p.title}
          </li>
        ))}
      </ul>

      {selectedPost && (
        <div style={{ marginTop: '20px' }}>
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.content}</p>

          <h3>Comments</h3>
          <ul>
            {comments.map(c => (
              <li key={c.id}><strong>{c.name}:</strong> {c.content}</li>
            ))}
          </ul>

          <CommentForm postId={selectedPost.id} refreshComments={() => fetchComments(selectedPost.id)} />
        </div>
      )}
    </div>
  );
}
