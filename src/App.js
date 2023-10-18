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
import ShowCard from "./components/Card/ShowCard";
import MovieCard from "./components/Card/MovieCard";
import Movies from "./components/Movies/Movies";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import { useEffect } from "react";

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
  console.log(search);
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
    <div>
      <Navbar />
      <Search defaultValue={search} />
      {searchResults.results.length > 0 ? (
        type === "movie" ? (
          <div className="container">
            <h2>{`${type} Search Results`}</h2>
            <div id="movies" className="grid">
              {searchResults.results.map((movie) => (
                <MovieCard key={movie.id} movie={movie} baseUrl={imageUrl} />
              ))}
            </div>
          </div>
        ) : (
          <div className="container">
            <h2>{`${type} Search Results`}</h2>
            <div id="shows" className="grid">
              {searchResults.results.map((show) => (
                <ShowCard key={show.id} show={show} baseUrl={imageUrl} />
              ))}
            </div>
          </div>
        )
      ) : (
        <Movies movies={results} title={"Popular Movies"} baseUrl={imageUrl} />
      )}

      <Footer />
    </div>
  );
}

export default App;
