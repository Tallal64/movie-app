import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Movie from "./components/Movie";

const App = () => {
  const API_URL = "http://www.omdbapi.com?apikey=5b0788bf";

  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }

    console.log(data);
  };

  useEffect(() => {
    searchMovies("avengers");
  }, []);

  return (
    <section className="font-poppins bg-[#181818] min-h-screen">
      <Navbar searchMovies={searchMovies} />

      {movies.length > 0 ? (
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-20 px-20 py-16">
          {movies.map((movie) => (
            <Movie movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div>
          <h1>nothing to show</h1>
        </div>
      )}
    </section>
  );
};

export default App;
