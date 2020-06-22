import React from "react";
import './MovieSearch.css'; 
import {useState} from "react";
import MovieCard from "./MovieCard";

const MovieSearch = (props) => {

  //states 
  const [query, setQuery] = useState('');
  //create the state for movies and update the state
  const [movies, setMovies] = useState([]);

  
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

      <div className="card-list"> 
      {/* will only keep the ones that have an image */}
        { movies.filter(movie => movie.poster_path).map(movie => (
            <MovieCard movie={movie}/>
        ))}
     </div>
    </div>
  );
}

export default MovieSearch; 