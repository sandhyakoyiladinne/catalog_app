import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moviesData from '../movies.json'; // Ensure the path is correct
import './Home.css';

const ITEMS_PER_PAGE = 12;

const Home = () => {
  const [filteredMovies, setFilteredMovies] = useState(moviesData);
  const [currentPage, setCurrentPage] = useState(1);
  const [genre, setGenre] = useState(''); // Filter by genre
  const [year, setYear] = useState(''); // Filter by release year
  const [imdbRating, setImdbRating] = useState(''); // Filter by IMDb rating
  const [searchText, setSearchText] = useState(''); // Search text for filtering
  const [suggestions, setSuggestions] = useState([]); // Suggestions for search
  const [focused, setFocused] = useState(false); // To manage focus state

  useEffect(() => {
    // Filter movies based on genre, year, and IMDb rating
    let filtered = moviesData;

    if (genre) {
      filtered = filtered.filter(movie => movie.genres.includes(genre));
    }

    if (year) {
      filtered = filtered.filter(movie => movie.release_year === Number(year));
    }

    if (imdbRating) {
      filtered = filtered.filter(movie => movie.imdb_rating >= Number(imdbRating));
    }

    // Filter movies by search text
    if (searchText) {
      filtered = filtered.filter(movie =>
        typeof movie.title === 'string' && movie.title.toLowerCase().includes(searchText.toLowerCase())
      );

      // Get suggestions based on the search text
      const suggestedData = moviesData.filter(movie =>
        typeof movie.title === 'string' && movie.title.toLowerCase().startsWith(searchText.toLowerCase())
      );
      setSuggestions(suggestedData.slice(0, 5));
    } else {
      setSuggestions([]);
    }

    setFilteredMovies(filtered);
    setCurrentPage(1); // Reset to the first page after filtering
  }, [searchText, genre, year, imdbRating]);

  const indexOfLastMovie = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstMovie = indexOfLastMovie - ITEMS_PER_PAGE;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil(filteredMovies.length / ITEMS_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearch = (searchText) => {
    setFocused(true);
    setSearchText(searchText);
  };

  const handleSuggestionClick = (movieTitle) => {
    setSearchText(movieTitle);
    handleSearch(movieTitle);
    setSuggestions([]);
  };

  const handleToggleBlur = () => {
    setFocused(false);
  };

  return (
    <div onClick={handleToggleBlur} className="home-page">
      <h2>Welcome to the Movie Catalog</h2>

      {/* Search Input */}
      <input
        type="text"
        className="search-input"
        value={searchText}
        placeholder="Search Movies...."
        onChange={(e) => handleSearch(e.target.value)}
      />

      {/* Suggestions */}
      {focused && suggestions.length > 0 && (
        <div className="suggestions">
          {suggestions.map((movie, index) => (
            <div
              key={index}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(movie.title)}
            >
              {movie.title}
            </div>
          ))}
        </div>
      )}

      {/* Filter Section */}
      <div className="filter-container">
        <select onChange={(e) => setGenre(e.target.value)} defaultValue="">
          <option value="">All Genres</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Romance">Romance</option>
          <option value="Adventure">Adventure</option>
          <option value="Crime">Crime</option>
          <option value="Sport">Sport</option>
          <option value="Biography">Biography</option>
          <option value="War">War</option>
          <option value="Animation">Animation</option>
          <option value="Horror">Horror</option>
          <option value="Thriller">Thriller</option>
          <option value="Musical">Musical</option>
          <option value="Family">Family</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Western">Western</option>
          <option value="Documentary">Documentary</option>
          <option value="Mystery">Mystery</option>
        </select>

        <select onChange={(e) => setYear(e.target.value)} defaultValue="">
          <option value="">All Years</option>
          {Array.from({ length: 101 }, (_, index) => 1900 + index).map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        <select onChange={(e) => setImdbRating(e.target.value)} defaultValue="">
          <option value="">All Ratings</option>
          {Array.from({ length: 51 }, (_, index) => (5 + index * 0.1).toFixed(1)).map((rating) => (
            <option key={rating} value={rating}>{rating}</option>
          ))}
        </select>
      </div>

      {/* Movies List Section */}
      <div className="movies-list">
        {currentMovies.length > 0 ? (
          currentMovies.map((movie, index) => (
            <Link to={`/movie/${encodeURIComponent(movie.title)}`} key={`${movie.title}-${index}`} className="movie-item">
              <img src={movie.poster} alt={movie.title} />
              <h3>{movie.title}</h3>
            </Link>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>

      {/* Pagination Section */}
      <div className="pagination">
        <button onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default Home;


