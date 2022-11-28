import styled from "styled-components";
import Image from "next/legacy/image";
import Link from "next/link";
import Header from "../../components/Header";

export default function Faves({ movies, toggleFavoriteMovie }) {
  return (
    <>
      <Header headerTitle="favorites" variant="faves" />
      <MovieListGrid>
        {movies
          .filter((movie) => movie.isAdded)
          .map((movie) => (
            <ListItem key={movie.id} toggleFavoriteMovie={toggleFavoriteMovie}>
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
          ))}
      </MovieListGrid>

      <p>
        <Link href={"/"}>back to home</Link>
      </p>
    </>
  );
}

const ListItem = styled.li`
  position: relative;
  margin-left: 10px;
  margin-bottom: 10px;
  width: 100px;
  height: 100px;
  list-style: none;
`;

const MovieListGrid = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
`;
