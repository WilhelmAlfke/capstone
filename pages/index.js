import ListItemSquare from "../components/ListItemSquare";
import useSWR from "swr";
import { fetcher } from "../helpers/api";

export default function Home() {
  const { data: movies, error } = useSWR("/api/movies", fetcher);

  if (!movies) {
    return <h2> loading..</h2>;
  }

  if (error) return <div>failed to load</div>;

  return (
    <>
      <main>
        <h1>series & movies</h1>
        <ul>
          <ListItemSquare movies={movies} />
        </ul>
      </main>
    </>
  );
}