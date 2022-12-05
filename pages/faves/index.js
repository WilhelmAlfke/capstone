import styled from "styled-components";
import Image from "next/legacy/image";
import Link from "next/link";
import Header from "../../components/Header";
import Svg from "../../components/Svg";
import Footer from "../../components/Footer";

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

const StyledLink = styled(Link)`
  position: relative;
  margin-left: 10px;
  color: #e97f7f;
  z-index: 5;
`;
