import GlobalStyles from "../components/GlobalStyles";
import { useLocalStorage } from "../helpers/hooks.js";
import moviesDb from "../helpers/db.json";
import { useState } from "react";

export default function MyApp({ Component, pageProps, variant }) {
  const [movies, setMovies] = useLocalStorage("movies", moviesDb);

  function toggleFavoriteMovie(id) {
    setMovies((movies) => {
      const newValue = movies.map((movie) => {
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
        toggleFavoriteMovie={toggleFavoriteMovie}
      />
    </>
  );
}
