import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovie } from "../../api";
import styles from "./MovieDetailsPage.module.css";

const formatReleaseYear = (dateString) => {
  return new Date(dateString).getFullYear();
};

const calculateUserScore = (voteAverage) => {
  return Math.round(voteAverage * 10);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/movies";

  useEffect(() => {
    const fetchMovie = async () => {
      if (movieId) {
        const m = await getMovie(movieId);
        setMovie(m);
      }
    };

    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return <p>Loading movie info...</p>;
  }

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => navigate(from)}>
        &larr; Go back
      </button>

      <div className={styles.movieInfo}>
        <img
          alt={movie.original_title}
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          className={styles.poster}
        />
        <div>
          <h1>
            {movie.original_title} ({formatReleaseYear(movie.release_date)})
          </h1>
          <p>
            <strong>User Score:</strong>
            {calculateUserScore(movie.vote_average)}%
          </p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>
            {movie.genres.map((g) => (
              <span key={g.id} className={styles.genre}>
                {g.name}
              </span>
            ))}
          </p>
        </div>
      </div>

      <hr />

      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="cast" state={{ from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from }}>
            Reviews
          </Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
