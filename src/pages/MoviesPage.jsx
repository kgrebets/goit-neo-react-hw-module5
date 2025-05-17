
import React, { useState } from "react";
import { Link } from "react-router-dom";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold text-blue-600">Movies Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white rounded px-4 py-1">
          Search
        </button>
      </form>
    </div>
  );
};

export default MoviesPage;
