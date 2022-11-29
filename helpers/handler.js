import SearchBar from "../components/SearchBar";
import movies from "./db.json"

export async function inputHandler() {
  const response = await fetch("./db.json");
  const result = await Response.json();

  if (!response.ok) {
    throw new Error(error)
  }
  else {
  return (
    <SearchBar onSearch={inputHandler} />
    {movies.title.map((movie)=> (
        
  ))}
  )
}
}