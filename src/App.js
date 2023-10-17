import { useLoaderData } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { baseImageURL, options, popularMoviesURL, getData } from "./js/data";
import Movies from "./components/Movies/Movies";
import Footer from "./components/Footer/Footer";

export async function loader() {
  const movies = await getData(popularMoviesURL, options);
  const image = await getData(baseImageURL, options);

  return {
    imageUrl: image.images.base_url,
    movies: movies,
  };
}

function App() {
  const { movies } = useLoaderData();
  const { imageUrl } = useLoaderData();
  const { results } = movies;
  return (
    <div>
      <Navbar />
      <Movies movies={results} title={"Popular Movies"} baseUrl={imageUrl} />
      <Footer />
    </div>
  );
}

export default App;
