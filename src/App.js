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
  const [customer, setCustomer] = useState({});
  const [movie, setMovie] = useState({});

  const addMovie = (check_movie) => {
    for (let i = 0; i < library.length; i++) {
      if (check_movie.title === library[i].title) {
        return 
      };
    }
    let new_library = [...library];
    new_library.push(check_movie);

    setLibrary(new_library);

  
    let date = new Date();

    date.setDate(date.getDate() + 7);
      useEffect(() => {
        axios.post(`${URL}${check_movie.title}/check-out`, {
          due_date: `${date}`
        }).then((response) => {
          console.log(response);
        }).catch((error) => {
          console.log(error);
        })
      }, []);
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
     
      <div className="app"> 
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

          <section className="current-selected"> 
             <p> Selected Customer: {customer.name}</p> 
            <div> 
              <p> Selected Movie: {movie.title}</p>
              <img className="movie-card--image" src={`${movie.image_url}`} alt={movie.title} width="60px" height="80px"/>
            </div>
          </section>

          <Switch>
            <Route path="/search">
              <MovieSearch url={URL} addMovieCallback={addMovie}/>
            </Route>
            
            <Route path="/library">
              <RentalLibrary library={library} currentMovieCallback={setMovie}/>
            </Route>

            <Route path="/customers">
              <CustomerList url={URL} currentCustomerCallback={setCustomer}/>
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
