import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";

const Movies = ({ title, movies, baseUrl }) => {
  return (
    <div className="container">
      <h2>{title}</h2>
      <div id={title} className="grid">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} baseUrl={baseUrl} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
