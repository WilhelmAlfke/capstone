import getAllMovies from "../../../helpers/db";

export default async function handler(request, response) {
  if (request.method === "GET") {
    const allMovies = await getAllMovies();
    response.status(200).json(allMovies);
  } else {
    response.status(405).setHeader("Allow", ["GET"]).send();
  }
}
