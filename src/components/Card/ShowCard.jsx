/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const ShowCard = ({ baseUrl, show }) => {
  const width = "w500";
  return (
    <div className="card">
      <Link to={`/show/${show.id}`}>
        <img
          src={
            show.poster_path
              ? `${baseUrl + width + show.poster_path}`
              : "https://critics.io/img/movies/poster-placeholder.png"
          }
          alt=""
          className="card-img-top"
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{show.name}</h5>
        <p className="card-text">
          <small className="text-muted">Release: {show.first_air_date}</small>
        </p>
      </div>
    </div>
  );
};

export default ShowCard;
