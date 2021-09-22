import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import Test from "./firebase";
import AuthProvider from "./ContextApi/AuthContext";
import UserProfile from "./Components/Profiles/UserProfile";
import ProtectedRoute from "./Helpers/ProtectedRoute";
import PublicRoute from "./Helpers/PublicRoute";
import ProfilePhoto from "./Components/Profiles/ProfilePhoto";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import PhoneAuth from "./Components/Auth/PhoneAuth";
import AddMovie from "./Components/Movies/AddMovie";
import MovieProvider from "./ContextApi/MovieContext";
import VideoPlayer from "./Components/Movies/VideoPlayer";
import Movie from "./Components/Movies/Movie";

const App = () => {
  console.log(Test);
  return (
    <section id="netFlixMainBlock">
      <article>
        <AuthProvider>
          <Router>
            <Navbar />
            <ToastContainer />
            <Switch>
              <Route path="/" exact>
                <MovieProvider>
                  <HomePage />
                </MovieProvider>
              </Route>

              <PublicRoute path="/signin" exact>
                <Login />
              </PublicRoute>
              <PublicRoute path="/signup" exact>
                <Register />
              </PublicRoute>
              <PublicRoute path="/forgot-password" exact>
                <ForgotPassword />
              </PublicRoute>
              <PublicRoute path="/otp" exact>
                <PhoneAuth />
              </PublicRoute>

              <ProtectedRoute path="/upload-profile-pic" exact>
                <ProfilePhoto />
              </ProtectedRoute>

              <ProtectedRoute path="/upload-movie" exact>
                <AddMovie />
              </ProtectedRoute>

              <ProtectedRoute path="/profile" exact>
                <UserProfile />
              </ProtectedRoute>

              <ProtectedRoute
                path={`/movies-details/:movie_name/:movie_id`}
                exact
              >
                <Movie />
              </ProtectedRoute>

              <ProtectedRoute path={`/movies/:movie_name/:movie_id`} exact>
                <VideoPlayer />
              </ProtectedRoute>
            </Switch>
          </Router>
        </AuthProvider>
      </article>
    </section>
  );
};

export default App;
