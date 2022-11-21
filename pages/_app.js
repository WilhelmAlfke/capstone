import GlobalStyles from "../components/GlobalStyles";
import { useLocalStorage } from "../helpers/hooks.js";
import moviesDb from "../helpers/db.json";

function MyApp({ Component, pageProps }) {
  const [movies, setMovies] = useLocalStorage("movies", moviesDb);
  // const [storage, setStorage] = useLocalStorage("", {});

  // useEffect(() => {
  //   setMovies((oldMovies) => [
  //     ...oldMovies,
  //     {
  //       id: "5234",
  //       title: "the wire",
  //       year: "2002",
  //       genre: "crime",
  //       plot: "This series looks at the narcotics scene in Baltimore through the eyes of law enforcers as well as the drug dealers and users. Other facets of the city that are explored in the series are the government and bureaucracy, schools and the news media. The show was created by former police reporter David Simon, who also wrote many of the episodes.",
  //       picture: "/img/thewire.jpeg",
  //     },
  //   ]);
  // }, []);

  // function addMorningAnswer(answer) {
  //   setMovies((previousMorningAnswers) => [
  //     ...oldMovies,
  //     { id: crypto.randomUUID(), text: answer },

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} movies={movies} setMovies={setMovies} />
    </>
  );
}

export default MyApp;
