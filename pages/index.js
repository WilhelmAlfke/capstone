import SquareList from "../components/SquareList";
// import DetailList from "../components/DetailList";

export default function Home({ movies }) {
  console.log(movies);
  if (!movies) {
    return <h2> loading..</h2>;
  }

  return (
    <main>
      <h1>series & movies</h1>

      <SquareList movies={movies} />
    </main>
  );
}
