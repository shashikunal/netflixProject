import React, { useState } from "react";
import "./Auth.css";
import { Link, withRouter } from "react-router-dom";
import firebase from "../../firebase";
import { toast } from "react-toastify";

const Login = ({ history }) => {
  let [state, setState] = useState({
    email: "",
    password: "",
    loading: false,
  });

  let { email, password, loading } = state;
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
        .signInWithEmailAndPassword(email, password);
      if (userData.user.emailVerified === true) {
        toast.success(`successfully user logged in`);
        history.push("/profile");
      } else {
        toast.error(`user not yet verified please verify and login`);
        history.push("/signin");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setState({
        email: "",
        password: "",
      });
    }
    setState({ loading: false });
  };
  return (
    <section id="AuthBlock" style={{ background: `url(images/poster.jpg)` }}>
      <article>
        <main>
          <h2>Sign in</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="enter email/phone number"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="enter password"
              required
              value={password}
              onChange={handleChange}
            />
            <div>
              <button>{loading === true ? "loading..." : "Sign in"}</button>
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
                  New to Netflix ?<Link to="/signup">Sign up now</Link>
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

export default withRouter(Login);
