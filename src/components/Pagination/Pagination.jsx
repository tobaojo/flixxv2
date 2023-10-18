import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  getData,
  options,
  popularMoviesNextURL,
  baseImageURL,
} from "../../js/data";
import Movies from "../Movies/Movies";

export async function loader({ params }) {
  const { page } = params;
  console.log(page);
  const movies = await getData(popularMoviesNextURL + page, options);
  const image = await getData(baseImageURL, options);
  console.log(movies);
  return {
    movies,
    page,
    imageUrl: image.images.base_url,
  };
}

const Pagination = () => {
  const [page, setPage] = useState(1);
  const { movies, imageUrl } = useLoaderData();

  function handleIncrementClick(e) {
    setPage(page + 1);
  }
  return (
    <>
      <Movies
        movies={movies.results}
        title={"Popular Movies"}
        baseUrl={imageUrl}
      />
      <div>{`Page ${page - 1} of total`}</div>
      <Link onClick={handleIncrementClick} to={`/pages/${page}`}>
        Next
      </Link>
    </>
  );
};

export default Pagination;
