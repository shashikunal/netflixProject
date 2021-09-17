import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../ContextApi/AuthContext";
import firebase from "../../../firebase";
import { toast } from "react-toastify";

import "./RightNavbar.css";
import { Fragment } from "react";
const RightNavbar = () => {
  let USER = useContext(AuthContext);
  // let { displayName, photoURL, email } = USER;

  let SignOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(_ => {
        window.location.assign("/signin");
      })
      .catch(err => {
        toast.error(err.message);
      });
  };

  let GuestUser = () => {
    return (
      <li>
        <Link to="/signin">Sign in</Link>
      </li>
    );
  };

  let AuthenticatedUser = () => {
    return (
      <Fragment>
        <li>
          <a href="/profile">
            <img
              src={USER.photoURL}
              alt={USER.displayName}
              className="profilePic"
            />
          </a>
        </li>
        <li>
          <a href="#" onClick={SignOut}>
            Sign out
          </a>
        </li>
      </Fragment>
    );
  };

  return (
    <div className="rightNavbar">
      <ul className="authMenu">
        <li>
          <a href="/">
            <span>
              <i className="fas fa-globe"></i>
            </span>
            English
          </a>
        </li>
        {USER ? <AuthenticatedUser /> : <GuestUser />}
      </ul>
    </div>
  );
};

export default RightNavbar;
