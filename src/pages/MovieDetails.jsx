import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'; // Import useState and useEffect
import moviesData from '../movies.json'; // Ensure the path is correct
import './MovieDetails.css';

const MovieDetails = () => {
  const { title } = useParams(); // Get the title from URL parameters
  const movie = moviesData.find(movie => movie.title === decodeURIComponent(title)); // Find the movie

  // State for the slider
  const [sliderValue, setSliderValue] = useState(0); // Initialize sliderValue

  // Use effect to update sliderValue when movie changes or is found
  useEffect(() => {
    if (movie) {
      setSliderValue(movie.length_in_min); // Set the slider value to the movie's length
    }
  }, [movie]);

  // Handle case when movie is not found
  if (!movie) {
    return <div>Movie not found</div>;
  }

  // Split the fields into arrays
  const directors = movie.directors.split('|').map(d => d.trim());
  const writers = movie.writers.split('|').map(w => w.trim());
  const stars = movie.stars.split('|').map(s => s.trim());
  const genres = movie.genres.split('|').map(g => g.trim());

  // Function to handle slider change
  const handleSliderChange = (e) => {
    setSliderValue(Number(e.target.value));
  };

  return (
    <div className="movie-details">
      <div className='movie'>
        <h2>{movie.title}</h2>
        <img src={movie.poster} alt={movie.title} />
      </div>
      <div className='details'>
        <p><strong>Release Year:</strong> {movie.release_year}</p>
        <p>
          <strong>Length:</strong> {movie.length_in_min} minutes
          {/* Slider for the movie length */}
          <input
            type="range"
            min="0"
            max={movie.length_in_min} // Max is the length of the current movie
            value={sliderValue}
            onChange={handleSliderChange}
            style={{ marginLeft: '10px' }} // Add some margin to separate the slider from the text
          />
        </p>
        {/* Display the current slider value below the slider */}
        <p>Selected Length: {sliderValue} minutes</p>
        <p><strong>IMDb Rating:</strong> {movie.imdb_rating}</p>
        <p><strong>Plot:</strong> {movie.plot}</p>
        <p><strong>Directors:</strong> {directors.join(', ')}</p>
        <p><strong>Writers:</strong> {writers.join(', ')}</p>
        <p><strong>Stars:</strong> {stars.join(', ')}</p>
        <p><strong>Genres:</strong> {genres.join(', ')}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
