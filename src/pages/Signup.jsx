
import { useState } from 'react';
import PropTypes from 'prop-types';
import './Signup.css';  // Importing the CSS file
import { auth } from './firebase'; // Ensure the path is correct
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Signup = ({ onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle local signup
  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the email is already registered
    if (users.find(user => user.email === email)) {
      alert('Email already registered');
      return;
    }

    // Save the new user
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful');

    // Call the onSignup function if provided
    if (onSignup) {
      onSignup({ email, password });
      navigate('/home'); // Redirect to home page
    }
  };

  // Handle Google signup
  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // Optionally save the Google user to local storage or handle as needed
      onSignup(user);
      navigate('/home'); // Redirect to home page
    } catch (error) {
      console.error("Error during Google signup:", error);
    }
  };

  return (
    <div className='signup-page'>
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Signup</h2>
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
        <button type="submit">Signup</button>
        <p>Already have an account? <a href="/login">Login here</a></p>
        <button onClick={handleGoogleSignup}>Signup with Google</button>
      </form>
      
    </div>
  );
};

// Adding PropTypes validation
Signup.propTypes = {
  onSignup: PropTypes.func,
};

export default Signup;
