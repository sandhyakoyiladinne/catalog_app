import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Review from './pages/Review'; 
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './components/Navbar';
import moviesData from './movies.json'; // Ensure this path is correct
import Landing from './pages/Landing';
import Footer from './components/Footer';
import MovieDetails from './pages/MovieDetails';

const App = () => {
  const [filteredMovies, setFilteredMovies] = useState(moviesData); // Manage filtered movies
  const [user, setUser] = useState(null); // To hold authenticated user data

  // Handle the search results
  const handleSearchResults = (movies) => {
    setFilteredMovies(movies); // Update the filtered movies
  };

  const handleLogin = (user) => {
    setUser(user); // Set the logged-in user
    alert('Login successful!');
  };

  const handleSignup = (user) => {
    setUser(user); // Set the signed-up user
    alert('Signup successful!');
  };

  const handleLogout = () => {
    setUser(null); // Clear the user on logout
  };

  return (
    <Router>
      <div>
        {/* Pass search results handler and user info to Navbar */}
        <Navbar onSearchResults={handleSearchResults} user={user} onLogout={handleLogout} />

        <Routes>
          {/* Landing page */}
          <Route path="/" element={<Landing />} />

          {/* Home page with filtered movies */}
          <Route 
            path="/home" 
            element={user ? <Home filteredMovies={filteredMovies} user={user} /> : <Navigate to="/" />} 
          />

          {/* Contact page */}
          <Route 
            path="/review" 
            element={user ? <Review email="example@example.com" /> : <Navigate to="/" />} 
          />
          {/* Movie details page */}
          <Route 
             path="/movie/:title" 
             element={<MovieDetails/>} 
           />

          {/* Login page */}
          <Route 
            path="/login" 
            element={<Login onLogin={handleLogin} />} 
          />

          {/* Signup page */}
          <Route 
            path="/signup" 
            element={<Signup onSignup={handleSignup} />} 
          />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
