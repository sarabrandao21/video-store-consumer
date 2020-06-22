import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MovieSearch from './components/MovieSearch';
import Library from './components/Library';
import Home from './components/Home';

const App = () => {
  
    return  (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/search"> About </Link>
              </li>
              <li>
                <Link to="/library"> Users </Link>
              </li>
            </ul>
          </nav>
  
          <Switch>
            <Route path="/search">
              <MovieSearch url="" />
            </Route>
            <Route path="/library">
              <Library />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  
  }

export default App;
