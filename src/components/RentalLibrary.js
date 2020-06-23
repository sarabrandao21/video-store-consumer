import React, { useState, useEffect } from 'react';
import MovieCard from "./MovieCard";
import axios from 'axios';

function RentalLibrary() {

    const URL = "http://localhost:3000/"
    const [library, setLibrary] = useState([]);
    const [error, setErrorMessage] = useState([]);
    
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