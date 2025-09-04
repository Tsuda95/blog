import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav style={{ marginBottom: '20px' }}>
      <Link to="/">Home</Link> | <Link to="/blog">Blog</Link> | <Link to="/contact">Contact</Link> | <Link to="/admin">Admin</Link>
    </nav>
  );
}
