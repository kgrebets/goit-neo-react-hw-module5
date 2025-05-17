import { getTrendingMovies } from "../api";
import MovieList from "../components/MovieList/MovieList";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await getTrendingMovies();
      const data = await response.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={movies}></MovieList>
    </div>
  );
};

export default HomePage;
