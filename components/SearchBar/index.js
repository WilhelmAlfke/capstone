import { useState } from "react";
import { TextField } from "@mui/material";
import List from "../../helpers/db.json";

export default function SearchMovies() {
  const [searchQuery, setSearchQuery] = useState();

  const searchHandler = (movieSearch) => {
    const lowerCase = movieSearch.target.value.toLowerCase();
    setSearchQuery(lowerCase);
  };

  return (
    <>
      <TextField
        variant="outlined"
        label="Search"
        fullWidth
        onChange={searchHandler}
      />
      <List input={inputText} />
    </>
  );
}
