import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import MovieSearch from "./components/MovieSearch";
import RentalLibrary from "./components/RentalLibrary"

const App = (props) => {

  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/search"> Movie Search </Link>
              </li>
              <li>
                <Link to="/library"> Rental Library </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/search">
              <MovieSearch />
            </Route>
            <Route path="/library">
              <RentalLibrary />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

function Home() {
  return (<h1> hello </h1>);
}

export default App;
