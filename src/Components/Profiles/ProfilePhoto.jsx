import React, { useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import "../Auth/Auth.css";

import firebase from "../../firebase";
import { AuthContext } from "./../../ContextApi/AuthContext";

let Styles = {
  color: "#fff",
  textDecoration: "none",
  background: "#222",
  padding: "2px 20px",
  fontSize: "12px",
};
const ProfilePhoto = ({ history }) => {
  let [state, setState] = useState({
    avatar: null,
    loading: false,
    barStatus: false,
    progress: 0,
  });

  let { avatar, loading, barStatus, progress } = state;

  let handleChange = e => {
    setState({ ...state, avatar: e.target.files[0] });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let { name } = avatar;
      //!upload feature starts here
      let uploadTask = await firebase
        .storage()
        .ref(`/profile-photo/${name}`)
        .put(avatar);
      console.log(uploadTask);
    } catch (error) {}
  };
  return (
    <section id="AuthBlock">
      <article>
        <main>
          <h2>Upload Profile Photo</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input type="file" onChange={handleChange} />
              <button>Upload Profile photo</button>
              <Link to="/profile" style={Styles}>
                back to profile
              </Link>
            </div>
          </form>
        </main>
      </article>
    </section>
  );
};

export default withRouter(ProfilePhoto);
