import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import MovieDetailPage from "../../pages/movies/[id]";
import { useLocalStorage } from "../../helpers/hooks";

export default function toggleFunction({ movieId }) {
  const [movies, setMovies] = useLocalStorage("isAdded", false);
  setMovies((movies) => {
    const newValue = movies.map((movie) => {
      if (movieDetail.id === movieId) {
        return { ...movie, isAdded: !movie.isAdded };
      } else {
        return movie;
      }
    });
    return newValue;
  });
}
