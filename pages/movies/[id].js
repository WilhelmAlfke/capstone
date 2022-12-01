// import DetailList from "../../components/DetailList";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";

export default function MovieDetailPage({
  movies,
  toggleFavoriteMovie,
  isAdded,
}) {
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
      <StyledDetailMain>
        <MovieImageContainer>
          <MovieImage
            objectFit="cover"
            fill
            src={movieDetail.picture}
            priority
            alt={`movieposter of ${movieDetail.title}`}
          />
        </MovieImageContainer>
        <DivContainer>
          {/* <WrapButton> */}
          <Button
            href={"#"}
            variant={!movieDetail.isAdded ? "add" : "remove"}
            type="button"
            aria-label="This button lets the user add or remove a movie/series to their favorites"
            onClick={() => {
              toggleFavoriteMovie(movieDetail.id);
            }}
          >
            {" "}
            <StyledButtonSpan>
              {!movieDetail.isAdded ? "add" : "remove"}
            </StyledButtonSpan>
          </Button>
          {/* <StyledButtonText></StyledButtonText> */}
          {/* </WrapButton> */}
        </DivContainer>
        <StyledSection>
          <StyledParagraph> {movieDetail.year} </StyledParagraph>
          <GenreList>
            {movieDetail.genre.map((tag) => {
              return <li key={movieDetail.genre}> {tag} </li>;
            })}
          </GenreList>

          <StyledParagraph> {movieDetail.plot} </StyledParagraph>
        </StyledSection>

        <Link href={"/"}>back</Link>
      </StyledDetailMain>
    </>
  );
}
const StyledDetailMain = styled.main`
  background-color: #ece6d3;
`;
const MovieImage = styled(Image)`
  position: relative;
  filter: grayscale(60%);
`;

const MovieImageContainer = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 50vw;
`;
const StyledParagraph = styled.p`
  margin: 0;
`;

const GenreList = styled.ul`
  padding: 0px;

  display: flex;

  position: relative;
  list-style: none;
  gap: 10px;
`;

const Button = styled(Link)`
  position: relative;
  margin-left: -20px;
  margin-top: -15px;
  /* -moz-transform: skew(20deg);
  -o-transform: skew(20deg); */
  transform: skew(45deg);
  width: 25%;
  height: 30px;
  background-color: #7aa2cb;
  border-style: none;
  z-index: 5;
  padding-left: 25px;
  display: inline-block;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 5px 0px;

  ${({ variant }) =>
    variant === "remove" &&
    css`
      background-color: #7aa2cb;
      color: #ece6d3;
    `}

  ${({ variant }) =>
    variant === "add" &&
    css`
      background-color: #ece6d3;
      color: #7aa2cb;
    `}
`;

// const WrapButton = styled.div`
//   @media (min-width: 1024px) {
//     &:hover ${Button} {
//       background-color: hotpink;
//     }
//   }
// `;

const DivContainer = styled.div`
  position: relative;
  margin-top: 0px;
  width: 100%;
  height: 25px;
  background-color: #7aa2cb;
  z-index: 0;
`;

const StyledSection = styled.section`
  position: relative;
  line-height: 1.2rem;
  margin: 10px 45px;
  width: 70%;
  /* border-style: solid; */
  /* border-radius: 8px; */
  /* background-color: #475e76; */

  padding: 1rem;
`;

const StyledButtonSpan = styled.span`
  margin-top: 5px;
  margin-left: 25px;
  display: flex;
  justify-content: left;
  transform: skew(-45deg);
`;
