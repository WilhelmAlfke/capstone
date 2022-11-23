import SquareList from "../components/SquareList";
import Header from "../components/Header";

export default function Home({ movies }) {
  if (!movies) {
    return <h2> loading..</h2>;
  }

  return (
    <main>
      <Header headerTitle="just find it" variant="homepage" />
      <h1>series & movies</h1>

      <SquareList movies={movies} />
    </main>
  );
}
