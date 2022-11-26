import GlobalStyles from "../components/GlobalStyles";
import { useLocalStorage } from "../helpers/hooks.js";
import moviesDb from "../helpers/db.json";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [movies, setMovies] = useLocalStorage("movies", moviesDb);
  const [toggle, setToggle] = useState(false);
  function toggleMovie(id) {
    setMovies((movies) => {
      const newValue = movies.map((movie) => {
        // console.log(movie.id);
        if (movie.id === id) {
          return { ...movie, isAdded: !movie.isAdded };
        } else {
          return movie;
        }
      });
      return newValue;
    });
  }
  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        movies={movies}
        setMovies={setMovies}
        toggleMovie={toggleMovie}
      />
    </>
  );
}

export default MyApp;
