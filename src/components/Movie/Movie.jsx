import React, { useEffect, useState } from "react";
import { movieUrl, options, baseImageURL } from "../../js/data";
import { Link, useParams } from "react-router-dom";

const Movie = () => {
  const [movie, setMovie] = useState({});
  const [movieImageURL, setMovieImageUrl] = useState("");
  const movieID = useParams();
  const { movieId } = movieID;
  const language = "?language=en-US";
  const movieURLReq = `${movieUrl + movieId + language}`;
  const width = "w500";

  useEffect(() => {
    fetch(movieURLReq, options)
      .then((res) => res.json())
      .then((data) => setMovie(data));

    fetch(baseImageURL, options)
      .then((res) => res.json())
      .then((data) => setMovieImageUrl(data.images.base_url));
  }, []);
  console.log(movie);
  return (
    <div className="container">
      <div className="back">
        <Link to={"/"}>Back to Movies</Link>
      </div>
      <div className="movies-details">
        <div className="details-top">
          <div>
            <img src={movieImageURL + width + movie.poster_path} alt="" />
          </div>
          <div>
            <h2>{movie.title}</h2>
            <h3>Tagline: {movie.tagline}</h3>
            <p>
              {movie.vote_average}
              {""} <i className="fas fa-star"></i>
            </p>
            <p>Release: {movie.release_date}</p>
            <p>{movie.overview}</p>
            <h5>Genres</h5>
            <ul>
              {movie?.genres?.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
            <a href={movie.homepage} target="_blank" rel="noreferrer">
              Visit movie homepage
            </a>
          </div>
        </div>
      </div>
      <div className="details-bottom">
        <h2>Movie Details</h2>
        <ul>
          <li>Budget: {movie.budget}</li>
          <li>Revenue: {movie.revenue}</li>
          <li>Runtime: {movie.runtime}</li>
          <li>status: {movie.status}</li>
        </ul>
      </div>
    </div>
  );
};

export default Movie;
