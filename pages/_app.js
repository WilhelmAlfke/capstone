import GlobalStyles from "../components/GlobalStyles";
import { useLocalStorage } from "../helpers/hooks.js";
import moviesDb from "../helpers/db.json";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [movies, setMovies] = useLocalStorage("movies", moviesDb);
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        movies={movies}
        setMovies={setMovies}
        toggle={toggle}
        setToggle={setToggle}
      />
    </>
  );
}

export default MyApp;
