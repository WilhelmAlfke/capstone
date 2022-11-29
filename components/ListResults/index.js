import styled from "styled-components";

export default function ResultList({
  searchInput,
  setSearchInput,
  movies,
  currywurst,
}) {
  console.log(currywurst);
  return (
    <>
      <ListList searchInput={searchInput} setSearchInput={setSearchInput}>
        {movies
          .filter((movie) => movies.includes(currywurst))
          .map((movie) => (
            <ListItemItem key={movie.id} movies={movies}>
              <Link href={`/movies/${movie.id}`}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  priority
                  alt={`movieposter of ${movie.title}`}
                  src={movie.picture}
                />
              </Link>
            </ListItemItem>
          ))}
      </ListList>
    </>
  );
}

const ListItemItem = styled.li`
  position: relative;
  margin-left: 10px;
  margin-bottom: 10px;
  width: 100px;
  height: 100px;
  list-style: none;
`;

const ListList = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
`;
