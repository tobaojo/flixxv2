import { useLoaderData } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import {
  baseImageURL,
  options,
  popularMoviesURL,
  searchMovieUrl,
  searchTVUrl,
  getData,
} from "./js/data";
import Movies from "./components/Movies/Movies";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import { useEffect } from "react";
import MovieSearchResults from "./components/Pagination/MovieSearchResults";
import TVSearchResults from "./components/Pagination/TVSearchResults";

export async function loader({ request }) {
  const movies = await getData(popularMoviesURL, options);
  const image = await getData(baseImageURL, options);
  const url = new URL(request.url);
  const search =
    url.searchParams.get("search") === null
      ? ""
      : url.searchParams.get("search");
  const type = url.searchParams.get("type");
  const searchResults =
    type === "movie"
      ? await getData(searchMovieUrl + search, options)
      : await getData(searchTVUrl + search, options);
  return {
    imageUrl: image.images.base_url,
    movies,
    searchResults,
    type,
    search,
  };
}

function App() {
  const { movies, imageUrl, searchResults, type, search } = useLoaderData();
  const { results } = movies;

  useEffect(() => {
    document.getElementById("search").value = search;
  }, [search]);

  return (
    <>
      <Navbar />
      <Search defaultValue={search} />
      {searchResults.results.length > 0 ? (
        type === "movie" ? (
          <MovieSearchResults
            searchResults={searchResults}
            search={search}
            type={type}
          />
        ) : (
          <TVSearchResults
            searchResults={searchResults}
            search={search}
            type={type}
          />
        )
      ) : (
        <Movies movies={results} title={"Popular Movies"} baseUrl={imageUrl} />
      )}
      <Footer />
    </>
  );
}

export default App;
