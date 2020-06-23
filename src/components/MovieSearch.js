import React, { useState } from 'react';
import axios from "axios";
import MovieCard from "./MovieCard"


const MovieSearch = (props) => {
  const END_POINT = 'movies?query=';

  //states 
  const [query, setQuery] = useState('');
  //create the state for movies and update the state
  const [movies, setMovies] = useState([]);
  const [error, setErrorMessage] = useState([]);

  const searchMovies = (e) => {
    e.preventDefault();

    
    axios.get(`${props.url}${END_POINT}${query}`)
    .then((response)=> {
      setMovies(response.data);
    }).catch((error) => {
      setErrorMessage(error);
      console.log(error);
    })

  
    
  }
  return (
    <div>
      <div> 
      </div>
       <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">Enter Movie Name:</label>
        <input className="input" type="text" name="query" placeholder="Movie Title" value={query} onChange={ (e) => setQuery(e.target.value)} /> 
        <button className="button" type="submit">Search </button>
      </form> 
      <div className="card-list"> 
        { movies.map(movie => (
            <MovieCard movie={movie} key={movie.external_id} url={props.url}/>
        ))}
     </div>
    </div>
  );
    
  
}

export default MovieSearch;