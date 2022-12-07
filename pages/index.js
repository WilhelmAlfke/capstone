import { useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Footer from "../components/Footer";
import Svg from "../components/Svg";

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
          <label htmlFor="search movie title" />
          <StyledInput
            type="text"
            placeholder="search movie title"
            value={searchedWord}
            onChange={inputHandler}
          />
        </StyledSearchBarWrapper>
        <MovieListGrid>
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
      </main>
      <Footer />
    </>
  );
}

const StyledSearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin: 0 25px 0 25px;
`;
const StyledInput = styled.input`
  margin-top: 15px;
  border-color: var(--primary-color);
  border-radius: 5px;
  padding: 10px;
`;

const MovieListGrid = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  justify-items: space-between;
  gap: 18px;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 0;

  position: relative;

  margin-bottom: 10px;
  width: 125px;
  height: 125px;
  list-style: none;
  border-style: solid;
  border-width: 2px;
  border-color: var(--primary-color);
  border-radius: 5px;
  filter: grayscale(60%);
`;
