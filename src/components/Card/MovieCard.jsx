/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const MovieCard = ({ baseUrl, movie }) => {
  const width = "w500";
  console.log(movie);
  return (
    <div className="card">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={
            movie.poster_path
              ? `${baseUrl + width + movie.poster_path}`
              : "https://critics.io/img/movies/poster-placeholder.png"
          }
          alt=""
          className="card-img-top"
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{movie.title || movie.name}</h5>
        <p className="card-text">
          <small className="text-muted">Release: {movie.release_date}</small>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
