// import DetailList from "../../components/DetailList";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import ToggleButton from "../../components/ToggleButton";
// import AddItem from "../../components/AddItem";

export default function MovieDetailPage({ movies, toggleFunction, movieId }) {
  console.log(movies);

  const { query } = useRouter();
  const { id } = query;

  function getMovieById(id) {
    return movies.find((movie) => movie.id === id);
  }

  const movieDetail = getMovieById(id);

  if (!movieDetail) return <h2>loading..</h2>;

  return (
    <>
      <Header headerTitle={movieDetail.title} variant="detailpage" />
      <main>
        <MovieImageContainer>
          <MovieImage
            objectFit="cover"
            fill
            src={movieDetail.picture}
            priority
            alt={`movieposter of ${movieDetail.title}`}
          />
        </MovieImageContainer>
        <Button
          type="button"
          aria-label="Add/Remove Toggle Button"
          onClick={() => {
            toggleFunction(movieId);
          }}
        >
          add to favorites
        </Button>
        <section>
          <p> {movieDetail.year} </p>
          <GenreList>
            {movieDetail.genre.map((tag) => {
              return <li key={movieDetail.id}> {tag} </li>;
            })}
          </GenreList>

          <p> {movieDetail.plot} </p>
        </section>

        <Link href={"/"}>back</Link>
      </main>
    </>
  );
}
const MovieImage = styled(Image)`
  position: relative;
`;

const MovieImageContainer = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 50vw;
`;

const GenreList = styled.ul`
  padding: 0px;
  display: flex;
  justify-content: space-around;
  position: relative;
  list-style: none;
`;

const Button = styled.button`
  position: relative;
  width: 100%;
  height: 20px;
  background-color: grey;

  ${({ variant }) =>
    variant === "added" &&
    css`
      background-color: hotpink;
    `}
`;
