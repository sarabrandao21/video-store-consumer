import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



import RentalLibrary from "./components/RentalLibrary"
import './App.css';
import MovieSearch from './components/MovieSearch';
import CustomerList from './components/CustomerList';


const App = () => {
 
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
                <Link to="/library"> Rental Library </Link>
              </li>
              <li>
                <Link to="/customers"> Customers </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/search">
              <MovieSearch url="http://localhost:3000/" />
            </Route>
            
            <Route path="/library">
              <RentalLibrary />
            </Route>

            <Route path="/customers">
              <CustomerList url="http://localhost:3000/" />
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
  <h1> ? </h1>
  );
}







export default App;
