import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';


import MovieSearch from './components/MovieSearch';


const App = (props) => {
 
    return  (
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
                <Link to="/library"> Library </Link>
              </li>
            </ul>
          </nav>
  
           <Switch>
            <Route path="/search">
              <MovieSearch url="http://localhost:3000/" />
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
      </div>
    );
    
};


function Home() {
  return (
  <h1> hello </h1>
  );
}


function Library() {
  return (
  <h1> hello </h1>
  );
}

export default App;


