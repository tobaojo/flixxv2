import React from "react";
import MovieItem from "../MovieItem/MovieItem";

const Movies = ({ title, movies, baseUrl }) => {
  return (
    <div className="container">
      <h2>{title}</h2>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} baseUrl={baseUrl} />
      ))}
    </div>
  );
};

export default Movies;
