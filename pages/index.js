import SquareList from "../components/SquareList";
import Header from "../components/Header";
import Link from "next/link";
import { useState } from "react";
// import SearchBar from "../components/SearchBar";

export default function Home({ movies }) {
  const [searchInput, setSearchInput] = useState("");
  if (!movies) {
    return <h2> loading..</h2>;
  }

  return (
    <>
      <Header headerTitle="just find it" variant="homepage" />
      <main>
        {/* <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} /> */}
        <SquareList movies={movies} />
        <Link href="/faves">favorite list</Link>
      </main>
    </>
  );
}
