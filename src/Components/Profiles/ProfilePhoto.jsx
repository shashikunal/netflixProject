import React, { useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import "../Auth/Auth.css";
import { toast } from "react-toastify";

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
  let currentUSER = useContext(AuthContext);

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
      let uploadTask = firebase
        .storage()
        .ref(`/profile-photo/${name}`)
        .put(avatar);
      console.log(uploadTask);

      //  firebase events
      uploadTask.on(
        "state_changed",
        snapShot => {
          //?Progress bar
          let progressBar =
            (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
          setState({ progress: progressBar, barStatus: true, loading: true });
        },

        err => {
          //error handling
        },
        async () => {
          //completion of Task
          let DownloadURL = await firebase
            .storage()
            .ref("profile-photo")
            .child(name)
            .getDownloadURL();
          setState({ barStatus: false, loading: false });
          currentUSER.updateProfile({
            photoURL: DownloadURL,
          });
          toast.success("profile photo successfully updated");
          window.location.assign("/profile");
        }
      );
    } catch (error) {}
    setState({ loading: false });
  };

  let ProgressBar = () => {
    return (
      <progress value={progress} min="0" max="100">
        {progress}
      </progress>
    );
  };
  return (
    <section id="AuthBlock">
      {barStatus === true ? (
        <div className="progressBlock">
          <span>{<ProgressBar />}</span>
          <span>{Math.round(progress) + "%"}</span>
        </div>
      ) : (
        ""
      )}

      <article>
        <main>
          <h2>Upload Profile Photo</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input type="file" onChange={handleChange} />
              <button>
                {loading === true ? "uploading..." : "Upload Profile photo"}
              </button>
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
