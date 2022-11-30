import Header from "../components/Header";
import Link from "next/link";
import SearchBar from "../components/SearchBar";

export default function Home({ movies }) {
  if (!movies) {
    return <h2> loading..</h2>;
  }

  return (
    <>
      <Header headerTitle="just find it" variant="homepage" />
      <main>
        <SearchBar movies={movies} placeholder="search.." />
        <Link href="/faves">favorite list</Link>
      </main>
    </>
  );
}
