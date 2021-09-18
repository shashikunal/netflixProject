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
                <HomePage />
              </Route>
              <PublicRoute path="/signin" exact>
                <Login />
              </PublicRoute>
              <PublicRoute path="/signup" exact>
                <Register />
              </PublicRoute>

              <ProtectedRoute path="/upload-profile-pic" exact>
                <ProfilePhoto />
              </ProtectedRoute>

              <ProtectedRoute path="/profile" exact>
                <UserProfile />
              </ProtectedRoute>
            </Switch>
          </Router>
        </AuthProvider>
      </article>
    </section>
  );
};

export default App;
