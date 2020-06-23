import React from 'react';
import axios from 'axios';


export default function MovieCard(props) {


  


  return (
  <div className="card">
    <img className="card--image" src={`${props.movie.image_url}`} alt={props.movie.title}/>
    <div className="class-content"> 
      <h2 className='card--title'> {props.movie.title} </h2>
      <p><small>RELEASE DATE: {props.movie.release_date}</small></p>
      <p> Overview: {props.movie.overview}</p>
    </div>
    <button onClick={() => checkout(props.movie)}> Add to Library </button> 
  </div>
  );
}


