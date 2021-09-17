import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "../../firebase";
import { toast } from "react-toastify";

import MD5 from "md5";

import "./Auth.css";
const Register = props => {
  let { history } = props;
  let [state, setState] = useState({
    email: "",
    username: "",
    password: "",
    loading: false,
  });
  let { email, username, password, loading } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let userData = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      // confirmation mail
      let verificationMail = `A verification message sent to ${email} please confirm it`;
      userData.user.sendEmailVerification();
      toast.info(verificationMail);
      //update profile
      userData.user.updateProfile({
        displayName: username,
        photoURL: `https:gravatar.com/avatar/${MD5(email)})?d=identicon`,
      });
      history.push("/signin");
    } catch (error) {
      toast.error(error.message);
    }
    setState({ loading: false });
  };
  return (
    <section id="AuthBlock" style={{ background: `url(images/poster.jpg)` }}>
      <article>
        <main>
          <h2>Sign up</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="enter email/phone number"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="username"
              value={username}
              placeholder="enter username"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="enter password"
              onChange={handleChange}
              required
            />
            <div>
              <button>{loading === true ? "loading..." : "Sign up"}</button>
            </div>
            <aside className="loginDesc">
              <div className="needHelp">
                <span>
                  <input type="checkbox" name="remember" id="remember" />
                  <b> remember me</b>
                </span>
                <span>
                  <a href="/">need help</a>
                </span>
              </div>

              <footer>
                <div>
                  <i className="fab fa-facebook-f"></i>
                  Login with facebook
                </div>
                <div>
                  Already have an Account ?<Link to="/signin">Sign in</Link>
                  <p>
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot. Learn more.
                  </p>
                </div>
              </footer>
            </aside>
          </form>
        </main>
      </article>
    </section>
  );
};

export default withRouter(Register);
