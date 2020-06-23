import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import RentalLibrary from "./components/RentalLibrary"
import axios from 'axios';
import './App.css';
import MovieSearch from './components/MovieSearch';
import CustomerList from './components/CustomerList';
//should I keep data in a higher level? anytime need to share data needs to be in a higher level
//to manipule the data I send it a callback(function) that would change what i need, give argument through the child 
//but run in the parent 
//when updating the parent data, you update every else, because you send a reference of the data to children
const App = (props) => {
  const URL = "http://localhost:3000/"
  const [library, setLibrary] = useState([]);
  const [error, setErrorMessage] = useState([]);
    
  const addMovie = (check_movie) => {
    //if check_movie does not include in library, setLibrary
  };
  useEffect(() => {
    axios
      .get(`${URL}/movies`)
      .then((response)=> {
        console.log(response.data);
        setLibrary(response.data); //
      })
      .catch((error) => {
        setErrorMessage(error);
      });
      
    }, []); //library needs to go in the array 

    return  (
     
      <div> 
         <h1 className="app-header"> Video Store Inventory Tracker  </h1>
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
              <MovieSearch url={URL}/>
            </Route>
            
            <Route path="/library">
              <RentalLibrary library={library} addMovieCallback={addMovie}/>
            </Route>

            <Route path="/customers">
              <CustomerList url={URL}/>
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
    <div className="home-header"> 
      <h1> Welcome to a Video Store Inventory Tracker </h1>
      <p> rental store inventory management tool </p>
    </div>
  );
}

export default App;
