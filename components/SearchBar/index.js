import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/legacy/image";

export default function Searchbar({ placeholder, movies }) {
  const [searchQuery, setSearchQuery] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  console.log(searchQuery);
  const inputHandler = (event) => {
    const inputText = event.target.value;
    setSearchInput(inputText);

    const results = [];

    movies.forEach((value) => {
      if (
        value.title.toLowerCase().includes(inputText.toLowerCase()) &&
        !results.includes(value)
      ) {
        results.push(value);
      }
      if (
        value.genre.includes(inputText.toLowerCase()) &&
        !results.includes(value)
      ) {
        results.push(value);
      }
      if (
        value.plot.toLowerCase().includes(inputText.toLowerCase()) &&
        !results.includes(value)
      ) {
        results.push(value);
      }
    });
    if (inputText === "") {
      setSearchQuery([]);
    } else {
      setSearchQuery(results);
    }
  };

  const clearInputField = () => {
    setSearchQuery([]);
    setSearchInput("");
  };
  console.log(searchInput);
  return (
    <SearchForm>
      <InputSearch
        type="text"
        placeholder={placeholder}
        value={searchInput}
        onChange={inputHandler}
      />
      {searchQuery.length !== 0 && (
        <GridList>
          {searchQuery.map((movie) => {
            return (
              <ListItem key={movie.id}>
                <Link href={`/movies/${movie.id}`}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    priority
                    alt={`movieposter of ${movie.title}`}
                    src={movie.picture}
                  />
                </Link>
              </ListItem>
            );
          })}
        </GridList>
      )}
    </SearchForm>
  );
}
const InputSearch = styled.input``;

const SearchForm = styled.form`
  position: relative;
`;
const GridList = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
`;

const ListItem = styled.li`
  position: relative;
  margin-left: 10px;
  margin-bottom: 10px;
  width: 100px;
  height: 100px;
  list-style: none;
`;
