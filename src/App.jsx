import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MovieCast from "./components/MovieCast";
import MovieReviews from "./components/MovieReviews";
import NotFoundPage from "./pages/NotFoundPage";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    // <Router>
    <div>
      <Navigation />
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/movies" element={<MoviesPage />} />

        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
    // </Router>
  );
}

export default App;
