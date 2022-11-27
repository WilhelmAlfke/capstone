import SquareList from "../components/SquareList";
import Header from "../components/Header";
import Link from "next/link";

export default function Home({ movies, setMovies }) {
  if (!movies) {
    return <h2> loading..</h2>;
  }

  return (
    <>
      <Header headerTitle="just find it" variant="homepage" />
      <main>
        <SquareList movies={movies} setMovies={setMovies} />
        <Link href="/faves">favorite list</Link>
      </main>
    </>
  );
}
