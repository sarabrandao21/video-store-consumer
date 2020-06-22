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


    
  

  return (<p>hi</p>);
    
  
}

export default MovieSearch;