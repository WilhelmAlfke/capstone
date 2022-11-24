import SquareList from "../components/SquareList";
import Header from "../components/Header";

export default function Home({ movies }) {
  if (!movies) {
    return <h2> loading..</h2>;
  }

  return (
    <>
      <Header headerTitle="just find it" variant="homepage" />
      <main>
        <SquareList movies={movies} />
      </main>
    </>
  );
}
