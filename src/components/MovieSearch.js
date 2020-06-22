import React, {useEffect, useState } from 'react';
import axios from "axios";
import MovieCard from "./MovieCard"


const MovieSearch = (props) => {
  const END_POINT = "search/movie";

  //states 
  const [query, setQuery] = useState('');
  //create the state for movies and update the state
  const [movies, setMovies] = useState([]);
  const [error, setErrorMessage] = useState([]);
  
  useEffect(() => 
  axios.get()
  .then((response)=> {
    setMovies(response.data);
  }).catch((error) => {
    console.log("here");
  }), []);


    
  
  // const searchMovies = async (e) => {
  //   e.preventDefault();
  //   console.log("submitting");
  //   const query = "Jurassic Park"
  //   const url = `https://api.themoviedb.org/3/search/movie?api_key=7a5868f2306d0e997e4c669b78aa9d66&language=en-US&query=${query}&page=1&include_adult=false`;
        
  //   try {  
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setMovies(data.results);
  //   }catch (err){
  //     console.error(err);
  //   }
  // }
  return (
    <div>
      <form className="form" >
        <label className="label" htmlFor="query">Movie Name</label>
        <input className="input" type="text" name="query" placeholder="Movie Title" value={query} onChange={ (e) => setQuery(e.target.value)} /> 
        <button className="button" type="submit">Search </button>
      </form>
    </div>
    
  
}

export default MovieSearch;