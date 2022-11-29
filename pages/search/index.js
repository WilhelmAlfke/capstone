import { useState } from "react";
import Searchbar from "../../components/SearchBar";
import ResultList from "../../components/ListResults";

export default function SearchPage({ movies }) {
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <Searchbar movies={movies} placeholder="search.." />
    </>
  );
}
