import React from "react";
import { movieUrl, options, baseImageURL, getData } from "../../js/data";
import { Link, useLoaderData } from "react-router-dom";
import "./Movie.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export async function loader({ params }) {
  const { movieId } = params;
  const completeMovieUrl = movieUrl + movieId;
  const movie = await getData(completeMovieUrl, options);
  const image = await getData(baseImageURL, options);

  return { movie, imageUrl: image.images.base_url };
}

const Movie = () => {
  const { movie } = useLoaderData();
  const { imageUrl } = useLoaderData();
  const width = "w500";

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="back">
          <Link className="btn" to={"/"}>
            Back to Movies
          </Link>
        </div>
        <div className="movies-details">
          <div className="details-top">
            <div>
              <img src={imageUrl + width + movie.poster_path} alt="" />
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
              <a
                className="btn"
                href={movie.homepage}
                target="_blank"
                rel="noreferrer"
              >
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
      <Footer />
    </>
  );
};

export default Movie;
