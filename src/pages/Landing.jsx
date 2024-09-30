import { useNavigate } from 'react-router-dom';
import './Landing.css'; // Optional: Create a CSS file for styling the button

const Landing = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="landing-page">
      <button className="start-button" onClick={handleStart}>
        Movie Catalog App
      </button>
    </div>
  );
};

export default Landing;
