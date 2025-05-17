
import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold text-green-600">Movie Details - ID: {movieId}</h1>
      <ul>
        <li><Link to="cast">Cast</Link></li>
        <li><Link to="reviews">Reviews</Link></li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
