import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieCast } from "../../api";
import styles from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      if (movieId) {
        const data = await getMovieCast(movieId);
        setCast(data.cast);
      }
    };

    fetchCast();
  }, [movieId]);

  if (cast === null) return <p>Loading...</p>;
  if (cast.length === 0) return <p>No cast information available.</p>;

  return (
    <ul className={styles.castList}>
      {cast.map((actor) => (
        <li key={actor.id} className={styles.castItem}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                : ""
            }
            alt={actor.name}
            className={styles.castImage}
          />
          <div>
            <p>
              <strong>{actor.name}</strong>
            </p>
            <p>as {actor.character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
