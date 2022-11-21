import styled from "styled-components";
import Image from "next/legacy/image";

export default function DetailList({ movie }) {
  return (
    <ul>
      return (
      <li key={movie.id}>
        <h1>{movie.title} </h1>
        <DetailImage
          alt={`movieposter of ${movie.title}`}
          src={movie.picture}
        />
        <p>
          year: {movie.year}
          genre: {movie.genre}
          summary: {movie.plot}
        </p>
      </li>
      );
    </ul>
  );
}

const DetailImage = styled(Image)`
  width: auto;
  height: auto;
  position: relative;
`;
