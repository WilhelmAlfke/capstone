import { useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function Home({ movies }) {
  const [searchedWord, setSearchedWord] = useState("");

  if (!movies) {
    return <h2> loading..</h2>;
  }

  function inputHandler(event) {
    const inputValue = event.target.value;
    setSearchedWord(inputValue.trim());
  }

  const searchResults = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchedWord.toLowerCase())
  );

  return (
    <>
      <Header headerTitle="just find it" variant="homepage" />
      <main>
        <StyledSearchBarWrapper>
          <label htmlFor="">Find movie by title</label>
          <input
            type="text"
            placeholder="search movie title"
            value={searchedWord}
            onChange={inputHandler}
          />
        </StyledSearchBarWrapper>
        <MovieListGrid>
          {/* conditional rendering: wenn sreachedWord (unser seach query) nicht null ist,
          dann mÃķchten wir die Liste haben.*/}
          {searchedWord.length !== 0 &&
            searchResults.map((movie) => {
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
        </MovieListGrid>
        <Link href="/faves">favorite list</Link>
      </main>
    </>
  );
}

const StyledSearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieListGrid = styled.ul`
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
