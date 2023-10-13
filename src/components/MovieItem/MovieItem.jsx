/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./MovieItem.css";

const MovieItem = ({ baseUrl, movie }) => {
  const width = "w500";
  return (
    <div className="card">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`${baseUrl + width + movie.poster_path}`}
          alt=""
          className="card-img-top"
        />
      </Link>
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
