import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
const App = () => {
  return (
    <section id="netFlixMainBlock">
      <article>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/signin" exact>
              <Login />
            </Route>
            <Route path="/signup" exact>
              <Register />
            </Route>
          </Switch>
        </Router>
      </article>
    </section>
  );
};

export default App;
