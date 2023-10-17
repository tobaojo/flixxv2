import React from "react";
import { getData, popularShowsURL, baseImageURL, options } from "../../js/data";
import Navbar from "../Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import ShowCard from "../Card/ShowCard";

export async function loader() {
  const shows = await getData(popularShowsURL, options);
  const image = await getData(baseImageURL, options);
  return { shows, imageUrl: image.images.base_url };
}

const Shows = () => {
  const { shows } = useLoaderData();
  const { imageUrl } = useLoaderData();
  const { results } = shows;

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Top rated TV Shows</h2>
        <div id="shows" className="grid">
          {results.map((show) => (
            <ShowCard key={show.id} show={show} baseUrl={imageUrl} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shows;
