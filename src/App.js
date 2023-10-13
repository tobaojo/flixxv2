import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { baseImageURL, url, options } from "./js/data";
import Movies from "./components/Movies/Movies";
import Footer from "./components/Footer/Footer";

function App() {
  const [movies, setMovies] = useState([]);
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));

    fetch(baseImageURL, options)
      .then((res) => res.json())
      .then((data) => setBaseUrl(data.images.base_url));
  }, []);
  console.log(movies);
  return (
    <div>
      <Navbar />
      <Movies movies={movies} title={"Popular Movies"} baseUrl={baseUrl} />
      <Footer />
    </div>
  );
}

export default App;
