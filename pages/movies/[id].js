// import DetailList from "../../components/DetailList";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Svg from "../../components/Svg";
import Head from "next/head";

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
      <Head>
        <title>Details</title>
        <meta
          property="og:title"
          content="Details of a movie or series"
          key="title"
        />
      </Head>
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
            variant={!movieDetail.isAdded ? "add" : "remove"}
            type="button"
            aria-label="This button lets the user add or remove a movie/series to their favorites"
            onClick={() => {
              toggleFavoriteMovie(movieDetail.id);
            }}
          >
            <StyledButtonSpan>
              {!movieDetail.isAdded ? "add" : "remove"}
            </StyledButtonSpan>
          </Button>
          <StyledP> Find it on {movieDetail.provider}</StyledP>
        </DivContainer>
        <SectionContainer>
          <StyledSection>
            <StyledParagraph> {movieDetail.year} </StyledParagraph>
            <GenreList>
              {movieDetail.genre.map((tag, index) => {
                return <li key={tag[index]}> {tag} </li>;
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
  margin-bottom: 70px;
`;
const MovieImage = styled(Image)`
  position: relative;
  filter: grayscale(60%);
`;
const Button = styled.button`
  margin-left: -20px;
  margin-top: -15px;
  transform: skew(45deg);
  width: 25%;
  height: 30px;
  border-style: none;
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
const MovieImageContainer = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 50vw;
`;

const StyledParagraph = styled.p`
  margin: 0;
  color: var(--fourth-color);
`;

const GenreList = styled.ul`
  padding: 0px;

  display: flex;

  position: relative;
  list-style: none;
  gap: 10px;
`;

const DivContainer = styled.div`
  position: relative;
  margin-top: 0px;
  width: 100%;
  height: 25px;
  background-color: var(--secondary-color);
`;

const StyledP = styled.p`
  position: relative;
  margin-top: -22px;
  margin-left: 165px;
  font-size: 0.8em;
  color: var(--third-color);
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
const StyledSection = styled.section`
  font-size: 0.9em;
  position: relative;
  line-height: 1.2em;
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
