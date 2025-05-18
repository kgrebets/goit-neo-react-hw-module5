import axios from "axios";

const API_ACCESS_TOKEN = import.meta.env.VITE_API_ACCESS_TOKEN;

const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${API_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
});

export const getTrendingMovies = async () => {
  const response = await apiClient.get("/trending/movie/day");
  return response.data.results;
};

export const getMovie = async (movieId) => {
  const response = await apiClient.get(`/movie/${movieId}`);
  return response.data;
};

export const getMovieCast = async (movieId) => {
  const response = await apiClient.get(`/movie/${movieId}/credits`);
  return response.data;
};

export const getMovieReviews = async (movieId) => {
  const response = await apiClient.get(`/movie/${movieId}/reviews`);
  return response.data;
};

export const searchMovies = async (query, page) => {
  const response = await apiClient.get("/search/movie", {
    params: {
      query,
      page,
    },
  });
  return response.data;
};
