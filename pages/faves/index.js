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
    </>
  );
}

const ListItem = styled.li`
  padding: 0;

  position: relative;

  margin-bottom: 10px;
  width: 125px;
  height: 125px;
  list-style: none;
  border-style: solid;
  border-width: 2px;
  border-color: #ece6d3;
  border-radius: 5px;
  filter: grayscale(60%);
`;

const MovieListGrid = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  justify-items: space-between;
  gap: 18px;
  padding: 0;
`;
