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

export async function loader({ request }) {
  const movies = await getData(popularMoviesURL, options);
  const image = await getData(baseImageURL, options);

  const url = new URL(request.url);
  const search = url.searchParams.get("search");
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
  };
}

function App() {
  const { movies, imageUrl, searchResults, type } = useLoaderData();
  const { results } = movies;
  return (
    <div>
      <Navbar />
      <Search />
      {type === "movie" || null ? (
        <div id="shows" className="grid">
          {searchResults.results.map((show) => (
            <ShowCard key={show.id} show={show} baseUrl={imageUrl} />
          ))}
        </div>
      ) : (
        <div id="movies" className="grid">
          {searchResults.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} baseUrl={imageUrl} />
          ))}
        </div>
      )}
      <Movies movies={results} title={"Popular Movies"} baseUrl={imageUrl} />
      <Footer />
    </div>
  );
}

export default App;
