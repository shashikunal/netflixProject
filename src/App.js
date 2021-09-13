import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
          </Switch>
        </Router>
      </article>
    </section>
  );
};

export default App;
