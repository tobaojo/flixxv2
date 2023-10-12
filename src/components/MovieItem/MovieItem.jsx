import React from "react";

const MovieItem = ({ baseUrl, movie }) => {
  const width = "w500";
  return (
    <div className="card">
      <a href="#">
        <img src={`${baseUrl + width + movie.poster_path}`} alt="" />
      </a>
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">
          <small className="text-muted">Release: {movie.release_date}</small>
        </p>
      </div>
    </div>
  );
};

export default MovieItem;
