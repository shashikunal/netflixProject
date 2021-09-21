import React, { useState, useContext, Fragment } from "react";
import "./Movies.css";
import { withRouter } from "react-router-dom";
import firebase from "../../firebase";
import { toast } from "react-toastify";
import { AuthContext } from "./../../ContextApi/AuthContext";
const AddMovie = props => {
  let USER = useContext(AuthContext);
  let [state, setState] = useState({
    movie_name: "",
    movie_year: "",
    movie_rating: "",
    movie_genre: "",
    movie_desc: "",
    movie_language: "",
    movie_certificate: "",
    movie_cast: "",
    loading: false,
    barStatus: false,
    progress: 0,
  });

  let {
    movie_name,
    movie_year,
    movie_rating,
    movie_genre,
    movie_desc,
    movie_language,
    movie_certificate,
    movie_cast,
    loading,
    progress,
    barStatus,
  } = state;

  let [Poster, setPoster] = useState("");
  let [Video, setVideo] = useState("");

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleImage = e => {
    setPoster({ Poster: e.target.files[0] });
  };
  let handleVideo = e => {
    setVideo({ Video: e.target.files[0] });
  };

  //?submit form
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      console.log(Poster);
      console.log(Video);

      let PosterName = Poster.Poster.name;
      let VideoName = Video.Video.name;
      let MoviePoster = firebase
        .storage()
        .ref(`movie_poster/${PosterName}`)
        .put(Poster.Poster);
      let VideoData = firebase
        .storage()
        .ref(`movie_video/${VideoName}`)
        .put(Video.Video);

      //firebase Event
      VideoData.on(
        "state_changed",
        snapShot => {
          //progress Bar
          let progress =
            (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
          setState({ ...state, loading: true, barStatus: true, progress });
        },
        err => {
          //error handling
        },
        async () => {
          //completion of task
          let DownloadPoster = await firebase
            .storage()
            .ref("movie_poster")
            .child(PosterName)
            .getDownloadURL();
          setPoster({ DownloadPoster });
          let DownloadVideo = await firebase
            .storage()
            .ref("movie_video")
            .child(VideoName)
            .getDownloadURL();
          setVideo({ DownloadVideo });
          //!==================connect to database================================/
          firebase
            .database()
            .ref("netflix-movies")
            .push({
              ...state,
              DownloadPoster,
              DownloadVideo,
            });
          toast.success("successfully movie uploaded");
          props.history.push("/");
        }
      );
    } catch (error) {
      toast.error(error.message);
    }
    setState({ loading: false });
  };

  let ProgressBar = () => {
    return (
      <Fragment>
        <progress value={progress} min="0" max="100"></progress>
        {Math.round(progress) + "%"}
      </Fragment>
    );
  };
  return (
    <section id="movie_block">
      <article>
        {barStatus === true ? <ProgressBar /> : ""}
        <h3>Add Movie</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              className="form-control"
              name="movie_name"
              placeholder="movie name"
              required
              value={movie_name}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="file"
              className="form-control"
              name="movie_image"
              required
              onChange={handleImage}
            />
          </div>
          <div>
            <input
              type="date"
              className="form-control"
              placeholder="year"
              name="movie_year"
              required
              value={movie_year}
              onChange={handleChange}
            />
          </div>
          <div>
            <select
              name="movie_genre"
              id="genre"
              value={movie_genre}
              onChange={handleChange}
            >
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Horror">Horror</option>
              <option value="Mystery">Mystery</option>
              <option value="Romance">Action</option>
              <option value="Thriller">Thriller</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              className="form-control"
              name="movie_language"
              placeholder="language"
              required
              value={movie_language}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="file"
              className="form-control"
              name="file"
              required
              onChange={handleVideo}
            />
          </div>
          <div>
            <input
              type="number"
              className="form-control"
              name="movie_rating"
              placeholder="rating"
              required
              value={movie_rating}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              className="form-control"
              name="movie_certificate"
              placeholder="certificate"
              required
              value={movie_certificate}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              className="form-control"
              name="movie_cast"
              placeholder="cast details"
              value={movie_cast}
              onChange={handleChange}
            />
          </div>
          <div className="movie_descBlock">
            <textarea
              name="movie_desc"
              id="movie_desc"
              cols="30"
              rows="10"
              value={movie_desc}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <button>{loading === true ? "Loading..." : "upload Movie"}</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default withRouter(AddMovie);
