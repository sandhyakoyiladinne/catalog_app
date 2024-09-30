
import { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';  // Importing the CSS file
import { auth } from './firebase'; // Ensure the path is correct
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle form submission for email/password login
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if the user exists in local storage
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      onLogin(user);
      navigate('/home'); // Redirect to home page
    } else {
      alert('Invalid credentials');
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      onLogin(user);
      navigate('/home'); // Redirect to home page
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <button type="submit">Login</button>
        <p>Dont have an account? <a href="/signup">Sign up here</a></p>
      </form>
      <button onClick={handleGoogleLogin} className="google-login-button">Login with Google</button>
    </div>
  );
};

// Prop validation
Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
