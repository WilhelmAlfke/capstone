import styled from "styled-components";
import Image from "next/legacy/image";

export default function SquareList({ movies }) {
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <ListItem key={movie.id}>
            <Image
              layout="fill"
              objectFit="cover"
              alt={`movieposter of ${movie.name}`}
              src={movie.picture}
            />
          </ListItem>
        );
      })}
    </ul>
  );
}

const ListItem = styled.li`
  display: flex;
  position: relative;
  margin-left: 10px;
  margin-bottom: 10px;
  width: 100px;
  height: 100px;
`;
