import styled from "styled-components";
import useSWR from "swr";
import { fetcher } from "../helpers/api";

export default function Home() {
  const { data: movies, error } = useSWR("/api/movies", fetcher);
  console.log(movies);
  if (!movies) {
    return <h2> loading..</h2>;
  }
  if (error) return <div>failed to load</div>;

  return (
    <>
      <h1>series & movies</h1>
      {movies.map((movie) => {
        return (
          <div>
            <ListItem>
              <img src={movie.picture} />
            </ListItem>
          </div>
        );
      })}
    </>
  );
}

const ListItem = styled.li`
  padding: 0;
`;
