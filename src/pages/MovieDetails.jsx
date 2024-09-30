
import { useParams } from 'react-router-dom';
import moviesData from '../movies.json'; // Ensure the path is correct
import './MovieDetails.css';

const MovieDetails = () => {
  const { title } = useParams(); // Get the title from URL parameters
  const movie = moviesData.find(movie => movie.title === decodeURIComponent(title)); // Find the movie

  if (!movie) {
    return <div>Movie not found</div>; // Handle the case when movie is not found
  }

  // Split the fields into arrays
  const directors = movie.directors.split('|').map(d => d.trim());
  const writers = movie.writers.split('|').map(w => w.trim());
  const stars = movie.stars.split('|').map(s => s.trim());
  const genres = movie.genres.split('|').map(g => g.trim());

  return (
    <div className="movie-details">
      <div className='movie'>
        <h2>{movie.title}</h2>
        <img src={movie.poster} alt={movie.title} />
      </div>
      <div className='details'>
        <p><strong>Release Year:</strong> {movie.release_year}</p>
        <p><strong>Length:</strong> {movie.length_in_min} minutes</p>
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
