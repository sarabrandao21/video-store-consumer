import React, { useState, useEffect } from 'react';
import MovieCard from "./MovieCard";
import axios from 'axios';

function RentalLibrary() {

    const URL = "http://localhost:3000/"
    const [library, setLibrary] = useState([]);
    const [error, setErrorMessage] = useState([]);
    //let newLibrary = [...library];
    // newLibrary.push(movie)
    useEffect(() => {
      axios
        .get(`${URL}/movies`)
        .then((response)=> {
          console.log(response.data);
          setLibrary(response.data);
        })
        .catch((error) => {
          setErrorMessage(error);
        });
        
      }, []);
    // setLibrary(newLibrary) //if set state in the render gets an infinite loop
    //get movies using external api
    return (
    <div>
        <p>Movies:</p>
            <div className="card-list"> 
                { library.map(movie => (
                    <MovieCard movie={movie} key={movie.external_id}/>
                ))}
            </div>
    </div>
    );
}

export default RentalLibrary;