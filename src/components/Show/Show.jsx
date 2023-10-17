import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { getData, options, showUrl, baseImageURL } from "../../js/data";
import { useLoaderData, Link } from "react-router-dom";

export async function loader({ params }) {
  const { showId } = params;
  const completeShowUrl = showUrl + showId;
  const show = await getData(completeShowUrl, options);
  const image = await getData(baseImageURL, options);
  console.log({ show, image: image.images.base_url });
  return { show, image: image.images.base_url };
}

const Show = () => {
  const { show, image } = useLoaderData();
  const width = "w500";
  console.log(image);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="back">
          <Link className="btn" to={"/shows"}>
            Back to TV Shows
          </Link>
        </div>
        <div className="movies-details">
          <div className="details-top">
            <div>
              <img src={image + width + show.poster_path} alt="" />
            </div>
            <div>
              <h2>{show.name}</h2>
              <h3>Tagline: {show.tagline}</h3>
              <p>
                {show.vote_average}
                {""} <i className="fas fa-star"></i>
              </p>
              <p>Release: {show.first_air_date}</p>
              <p>{show.overview}</p>
              <h5>Genres</h5>
              <ul>
                {show?.genres?.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
              <a
                className="btn"
                href={show.homepage}
                target="_blank"
                rel="noreferrer"
              >
                Visit TV Show homepage
              </a>
            </div>
          </div>
        </div>
        <div className="details-bottom">
          <h2>TV Show Details</h2>
          <ul>
            <li>Type: {show.type}</li>
            <li>Number of episodes: {show.number_of_episodes}</li>
            <li>Number of seasons: {show.number_of_seasons}</li>
            <li>status: {show.status}</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Show;
