const API_KEY = import.meta.env.VITE_API_KEY;

export const getTrendingMovies = async () => {
  return await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=" + API_KEY
  );
};
