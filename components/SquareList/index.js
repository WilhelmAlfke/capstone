import styled from "styled-components";
import Image from "next/image";

export default function SquareList({ movies }) {
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <ListItem key={movie.id}>
            <StyledImage
              height={100}
              width={100}
              priority
              alt={`movieposter of ${movie.name}`}
              src={movie.picture}
            />
          </ListItem>
        );
      })}
    </ul>
  );
}

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const ListItem = styled.li`
  display: flex;
  position: relative;
  margin-left: 10px;
  margin-bottom: 10px;
`;
