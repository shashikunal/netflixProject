import { createContext, useState, useEffect } from "react";
import firebase from "../firebase";
export let MovieContext = createContext();

let MovieProvider = ({ children }) => {
  //fetch from firebase database
  let [Movies, setMovies] = useState([]);

  useEffect(() => {
    let fetchApi = async () => {
      let netFlixMovies = firebase.database().ref("netflix-movies");
      //firebase event
      netFlixMovies.on("value", movies => {
        let NetflixAllMovies = [];
        movies.forEach(movie => {
          NetflixAllMovies.push({
            id: movie.key,
            movie_name: movie.val().movie_name,
            movie_poster: movie.val().DownloadPoster,
            movie_video: movie.val().DownloadVideo,
            movie_year: movie.val().movie_year,
            movie_genre: movie.val().movie_genre,
            movie_language: movie.val().movie_language,
            movie_certificate: movie.val().movie_certificate,
            movie_cast: movie.val().movie_cast,
            movie_desc: movie.val().movie_desc,
          });
        });
        setMovies(NetflixAllMovies);
      });
    };
    fetchApi();
  }, []);
  return (
    <MovieContext.Provider value={Movies}>{children}</MovieContext.Provider>
  );
};

export default MovieProvider;
