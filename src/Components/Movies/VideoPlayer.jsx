import React from "react";
import { withRouter, Link } from "react-router-dom";

const VideoPlayer = props => {
  console.log(props.location.state);
  let { id, movie_name, movie_poster, movie_video } = props.location.state;
  return (
    <section id="PlayerBlock">
      <article>
        <p className="back_button">
          <Link to="/">
            <i
              className="fas fa-long-arrow-left"
              style={{ fontSize: 40, color: "white" }}
            ></i>
          </Link>
        </p>
        <video src={movie_video} controls autoPlay></video>
      </article>
    </section>
  );
};

export default withRouter(VideoPlayer);
