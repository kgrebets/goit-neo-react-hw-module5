import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieReviews } from "../../api";
import styles from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      if (movieId) {
        const data = await getMovieReviews(movieId);
        setReviews(data.results);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (reviews === null) return <p>Loading...</p>;
  if (reviews.length === 0) return <p>No reviews available.</p>;

  return (
    <ul className={styles.reviewsList}>
      {reviews.map((review) => (
        <li key={review.id} className={styles.reviewItem}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;
