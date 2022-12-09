import styled from "styled-components";
import Image from "next/legacy/image";
import Link from "next/link";
import Header from "../../components/Header";
import Head from "next/head";
import Footer from "../../components/Footer";

export default function Faves({ movies, toggleFavoriteMovie }) {
  return (
    <>
      <Head>
        <title>Watch List</title>
        <meta property="og:title" content="Watch List" key="title" />
        <Link rel="icon" href="/logo.ico" />
      </Head>
      <Header headerTitle="watchlist" variant="faves" />
      <main>
        {movies.length === 0}
        <h2>0 movies added...</h2>
        <MovieListGrid>
          {movies
            .filter((movie) => movie.isAdded)
            .map((movie) => (
              <ListItem
                key={movie.id}
                toggleFavoriteMovie={toggleFavoriteMovie}
              >
                <Link href={`/movies/${movie.id}`}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    priority
                    alt={`movieposter of ${movie.title}`}
                    src={movie.picture}
                  />
                </Link>
                <StyledTitleParagraph>{movie.title}</StyledTitleParagraph>
              </ListItem>
            ))}
        </MovieListGrid>
      </main>
      <Footer />
    </>
  );
}

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
  margin-top: 20px;
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

const StyledTitleParagraph = styled.p`
  color: var(--fourth-color);
  margin-top: 120px;
  z-index: 10;
  font-size: 0.6em;
  border-style: solid;
  border-width: 2px;
  border-color: var(--primary-color);
  background-color: var(--primary-color);
`;
