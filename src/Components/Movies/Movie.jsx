import React from "react";
import { withRouter, Link } from "react-router-dom";
const Movie = props => {
  let {
    id,
    movie_name,
    movie_poster,
    movie_video,
    movie_desc,
    movie_cast,
    movie_year,
    movie_genre,
    movie_rating,
    movie_certificate,
  } = props.location.state;
  return (
    <section id="portalBlock">
      <article>
        <header>
          <Link
            to={{
              pathname: `/movies/${movie_name}/${id}`,
              state: { ...props.location.state },
            }}
          >
            <img src={movie_poster} alt={movie_name} />
          </Link>
        </header>
        <main></main>
        <footer></footer>
      </article>
    </section>
  );
};

export default withRouter(Movie);
