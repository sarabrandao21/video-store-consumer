import React, { useEffect } from 'react';

export default function RentalCard(props) {

  //post "/rentals/:title/return" --- returned true
  //api call customers
  
  let current_customer = {}
  let current_movie = {}

  for(let i = 0; i < props.library.length; i++){
    if (props.library[i].id === props.rental.movie_id){
      current_movie = props.library[i]
      
    } 
  }

  for(let i = 0; i < props.customers.length; i++){
    if (props.customers[i].id ==  props.rental.customer_id){
      current_customer = props.customers[i]
    } 
  }
   
  return (
  <div className="movie-card">
    <img className="movie-card--image" src={`${current_movie.image_url}`} alt={current_movie.title}/>
    <div className="class-content"> 
      <h2 className='card--title'> Movie Rented: {current_movie.title} </h2>
      <p className="subtitle"><small>Name: {current_customer.name}</small></p>
    </div>
    <button className="add-movie-button" onClick={() => {props.checkInCallback(current_movie.title, current_customer.id)}}> Check in  </button>
  </div>
  );
}