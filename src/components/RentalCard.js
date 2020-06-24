import React, { useEffect } from 'react';

export default function RentalCard(props) {

  //post "/rentals/:title/return" --- returned true
   
  return (
  <div className="movie-card">
    <img className="movie-card--image" src={`${props.rental.movie.image_url}`} alt={props.rental.movie.title}/>
    <div className="class-content"> 
      <h2 className='card--title'> Movie Rented: {props.rental.movie.title} </h2>
      <p className="subtitle"><small>Name: {props.rental.customer.name}</small></p>
    </div>
    <button className="add-movie-button" onClick={() => {props.checkInCallback(props.rental.movie_id)}}> Check in  </button>
  </div>
  );
}