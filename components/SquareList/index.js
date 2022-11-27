import styled from "styled-components";
import Image from "next/legacy/image";
import Link from "next/link";

export default function SquareList({ movies }) {
  return (
    <MovieListGrid>
      {movies.map((movie) => {
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
