import React from 'react';
import axios from 'axios';
import './MovieCard.css'

export default function MovieCard(props) {

  //call when the user clicks --- add to the api 
  
  return (
  <div className="movie-card">
    <img className="movie-card--image" src={`${props.movie.image_url}`} alt={props.movie.title}/>
    <div className="class-content"> 
      <h2 className='card--title'> {props.movie.title} </h2>
      <p className="subtitle"><small>RELEASE DATE: {props.movie.release_date}</small></p>
      <p className="description"> Overview: {props.movie.overview}</p>
    </div>
    {props.showAddToLibrary && <button className="add-movie-button"onClick={() => props.addMovieCallback(props.movie)}> Add to Library </button>} 
    <button className="add-movie-button" onClick={() => props.currentMovieCallback(props.movie)}> Select Movie </button>
  </div>
  );
}


