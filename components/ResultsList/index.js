import { React, useState } from "react";
import data from "../../helpers/db.json";

function List(movieResult) {
  return (
    <ul>
      {data.map((foundMovie) => (
        <li key={foundMovie.id}>{foundMovie.title}</li>
      ))}
    </ul>
  );
}
