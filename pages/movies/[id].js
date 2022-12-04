// import DetailList from "../../components/DetailList";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Svg from "../../components/Svg";

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
        </DivContainer>
        <SectionContainer>
          <StyledSection>
            <StyledParagraph> {movieDetail.year} </StyledParagraph>
            <GenreList>
              {movieDetail.genre.map((tag) => {
                return <li key={movieDetail.genre}> {tag} </li>;
              })}
            </GenreList>

            <StyledParagraph> {movieDetail.plot} </StyledParagraph>
          </StyledSection>
        </SectionContainer>
      </StyledDetailMain>
      <Footer>
        <StyledLink href="/" aria-label="Navigate to landing page">
          <Svg variant="home" />
        </StyledLink>
      </Footer>
    </>
  );
}
const StyledDetailMain = styled.main`
  background-color: var(--third-color);
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
  transform: skew(45deg);
  width: 25%;
  height: 30px;
  border-style: none;
  z-index: 5;
  padding-left: 25px;
  display: inline-block;
  text-decoration: none;
  box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 5px 0px;

  ${({ variant }) =>
    variant === "remove" &&
    css`
      background-color: var(--fourth-color);
      color: #e97f7f;
    `}

  ${({ variant }) =>
    variant === "add" &&
    css`
      background-color: var(--third-color);
      color: #7aa2cb;
    `}
`;

const DivContainer = styled.div`
  position: relative;
  margin-top: 0px;
  width: 100%;
  height: 25px;
  background-color: var(--secondary-color);
  z-index: 0;
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
const StyledSection = styled.section`
  position: relative;
  line-height: 1.2rem;
  margin: 10px 45px;
  width: 70%;
  padding: 1rem;
  border-style: solid;
  border-color: var(--third-color);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
`;

const StyledButtonSpan = styled.span`
  margin-top: 5px;
  margin-left: 25px;
  display: flex;
  justify-content: left;
  transform: skew(-45deg);
`;

const StyledLink = styled(Link)`
  position: relative;
  margin-left: 10px;
  color: #e97f7f;
`;
