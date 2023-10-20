import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getData, options, baseImageURL, searchMovieUrl } from "../../js/data";
import MovieCard from "../Card/MovieCard";
import "./Pagination.css";

export async function loader() {
  const image = await getData(baseImageURL, options);
  return {
    imageUrl: image.images.base_url,
  };
}

const MovieSearchResults = ({ searchResults, search, type }) => {
  const [page, setPage] = useState(searchResults.page);
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { imageUrl } = useLoaderData();
  console.log(imageUrl);

  function handleIncrementClick() {
    setPage(page + 1);
  }
  function handleDecrementClick() {
    setPage(page - 1);
  }

  useEffect(() => {
    async function getpageData() {
      const content = await getData(
        searchMovieUrl + search + "&page=" + page,
        options
      );

      console.log(searchMovieUrl + search + "&page=" + page);
      setResults(content);

      if (content.results.length > 0) {
        setLoading(true);
      }
    }

    getpageData();
  }, [page, search]);

  console.log(results.results);
  return (
    <>
      <div className="container">
        <h2>{`${type} search results`}</h2>
        <h4>{`Found ${searchResults.total_results} results for "${search}"`}</h4>
        <div id="movies" className="grid">
          {isLoading ? (
            results.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} baseUrl={imageUrl} />
            ))
          ) : (
            <></>
          )}
        </div>
        <p>{`Page ${page} of ${searchResults.total_pages}`}</p>
        <button
          className="btn"
          onClick={handleDecrementClick}
          disabled={page <= 1 ? true : false}
        >
          Prev
        </button>
        <button
          className="btn"
          onClick={handleIncrementClick}
          disabled={page >= searchResults.total_pages ? true : false}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default MovieSearchResults;
