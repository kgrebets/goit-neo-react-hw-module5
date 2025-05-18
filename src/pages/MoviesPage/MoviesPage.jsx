import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { searchMovies } from "../../api";
import styles from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = searchParams.get("query") || "";
  const page = parseInt(searchParams.get("page")) || 1;

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query.trim()) return;

      try {
        setLoading(true);
        setMovies(null);
        const data = await searchMovies(query, page);
        setMovies(data.results);
        setError(null);
      } catch {
        setError("Failed to load search results. Please try again later.");
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query, page]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.query.value.trim();
    if (searchQuery) {
      setSearchParams({ query: searchQuery, page: 1 });
    }
  };

  const handlePageChange = (newPage) => {
    setSearchParams({ query, page: newPage });
  };

  return (
    <div>
      <h1>Movies Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="query"
          placeholder="Search movies..."
          defaultValue={query}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {movies && movies.length === 0 && <p>No movies found.</p>}
      {movies && movies.length > 0 && <MovieList movies={movies} />}

      <div className={styles.pagination}>
        {page > 1 && (
          <button onClick={() => handlePageChange(page - 1)}>Prev</button>
        )}
        {movies && movies.length === 20 && (
          <button onClick={() => handlePageChange(page + 1)}>Next</button>
        )}
      </div>
    </div>
  );
};

export default MoviesPage;
