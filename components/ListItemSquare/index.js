import styled from "styled-components";
import Image from "next/image";

export default function ListItemSquare({ movies }) {
  return (
    <>
      {movies.map((movie) => {
        return (
          <ListItem key={movie.id}>
            <Image
              // height={100}
              // width={100}
              layout="fill"
              objectFit="cover"
              alt="picture of movie poster"
              src={movie.picture}
            />
          </ListItem>
        );
      })}
    </>
  );
}

const ListItem = styled.li`
  padding: 0;
  display: flex;
  flex-direction: row;
  position: relative;
  /* overflow: hidden; */
  margin-left: 10px;
  margin-bottom: 10px;
  width: 100px;
  height: 100px;
`;
