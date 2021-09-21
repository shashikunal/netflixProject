import React, { useContext } from "react";
import { MovieContext } from "./../../ContextApi/MovieContext";

const ListMovies = () => {
  let MOVIES = useContext(MovieContext);

  console.log(typeof MOVIES);
  console.log(Array.isArray(MOVIES));
  let y = MOVIES.map(x => x.movie_name);
  console.log(y)
  return (
    <div>
      <h1>List of Movies</h1>
    </div>
  );
};

export default ListMovies;
