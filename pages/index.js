import { useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Footer from "../components/Footer";
import Head from "next/head";

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
      <Head>
        <title>Just.Find.It</title>
        <meta property="og:title" content="Landing page" key="title" />
      </Head>
      <Header headerTitle="just find it" variant="homepage" />
      <main>
        <StyledSearchBarWrapper>
          <StyledLabel htmlFor="search movie title">
            search movie title
          </StyledLabel>
          <StyledInput
            title="search movie title"
            role="searchbox"
            name="search movie title"
            type="text"
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
  justify-content: center;
  width: 80%;
  margin: 0 35px;
  padding: 0;
`;

const StyledLabel = styled.label`
  font-size: 0.7em;
  margin-top: 45px;
`;
const StyledInput = styled.input`
  margin-top: 5px;
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
