import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.css';

const Navbar = ({ user, onLogout }) => {
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleNavClick = (path) => {
    if (!user) {
      alert('Please log in'); // Show alert if user is not logged in
    } else {
      navigate(path); // Navigate to the specified path if logged in
    }
  };

  const handleLogout = () => {
    onLogout(); // Call the logout function passed as a prop
    navigate('/'); // Redirect to the landing page after logout
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://img.icons8.com/fluency/200/totem-video-player.png" alt="totem-video-player" />
      </div>
      <h1>Movie Catalog</h1>
      <ul className="nav-links">
        <li><Link to="/home" onClick={() => handleNavClick('/home')}>Home</Link></li>
        <li><Link to="/review" onClick={() => handleNavClick('/review')}>Review</Link></li>
        {user ? (
          <>
            <li className="user-info">Welcome, {user.email}</li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <li><Link to="/login" onClick={() => handleNavClick('/login')}>Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  user: PropTypes.object,
  onLogout: PropTypes.func.isRequired,
};

export default Navbar;
