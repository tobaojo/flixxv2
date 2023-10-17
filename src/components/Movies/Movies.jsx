import React from "react";
import MovieCard from "../Card/MovieCard";
import "./Movies.css";

const Movies = ({ title, movies, baseUrl }) => {
  return (
    <div className="container">
      <h2>{title}</h2>
      <div id={title} className="grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} baseUrl={baseUrl} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
