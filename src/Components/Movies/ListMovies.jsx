import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { MovieContext } from "./../../ContextApi/MovieContext";

const ListMovies = () => {
  let MOVIES = useContext(MovieContext);

  return (
    <section id="thumbnail_videos">
      <h1>List of Movies</h1>
      <article>
        {MOVIES.map(movie => (
          <div key={movie.id} className="thumbnail">
            <figure>
              <Link
                to={{
                  pathname: `/movies-details/${movie.movie_name}/${movie.id}`,
                  state: { ...movie },
                }}
              >
                <img src={movie.movie_poster} alt={movie.movie_name} />
              </Link>
            </figure>
          </div>
        ))}
      </article>
    </section>
  );
};

export default withRouter(ListMovies);
