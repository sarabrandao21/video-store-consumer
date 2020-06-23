import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import RentalLibrary from "./components/RentalLibrary"
import axios from 'axios';
import './App.css';
import MovieSearch from './components/MovieSearch';
import CustomerList from './components/CustomerList';

const App = (props) => {
  const URL = "http://localhost:3000/"
  const [library, setLibrary] = useState([]);
  const [error, setErrorMessage] = useState([]);
    
  const addMovie = (check_movie) => {
    for (let i = 0; i < library.length; i++) {
      if (check_movie.title === library[i].title) {
        return 
      };
    }
    let new_library = [...library];
    new_library.push(check_movie);

    setLibrary(new_library);
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
      
    }, []); 

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
              <MovieSearch url={URL} addMovieCallback={addMovie}/>
            </Route>
            
            <Route path="/library">
              <RentalLibrary library={library} />
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
  <h1> ? </h1>
  );
}

export default App;
