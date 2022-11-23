import GlobalStyles from "../components/GlobalStyles";
import { useLocalStorage } from "../helpers/hooks.js";
import moviesDb from "../helpers/db.json";

function MyApp({ Component, pageProps }) {
  const [movies, setMovies] = useLocalStorage("movies", moviesDb);

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} movies={movies} setMovies={setMovies} />
    </>
  );
}

export default MyApp;
