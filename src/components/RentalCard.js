import React from 'react';

export default function RentalCard(props) {
  
  return (
  <div className="movie-card">
    <div className="class-content"> 
      <h2 className='card--title'> Movie Rented: {props.rental.title} </h2>
      <p className="subtitle"><small>Name: {props.rental.name}</small></p>
    </div>
    <button className="add-movie-button" onClick={() => {props.checkInCallback(props.rental.title, props.rental.customer_id)}}> Check in  </button>
  </div>
  );
}