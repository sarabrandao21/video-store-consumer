import React from 'react';
import axios from 'axios';


export default function MovieCard(props) {


  const checkout = (movie) => {

    
        
    // axios.post(`${props.url}/rentals/${movie.title}/check-out`, {

    // })
    //  .then((response)=> {
    //   console.log(response.data);
       
    //  }).catch((error) => {
    //    setErrorMessage(error);
    //  })

    //  props.AddToLibraryCallback(movie)

    
  }


  return (
  <div className="card">
    <img className="card--image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.movie.poster_path}`} alt={props.movie.title}/>
    <div className="class-content"> 
      <h2 className='card--title'> {props.movie.title} </h2>
      <p><small>RELEASE DATE: {props.movie.release_date}</small></p>
      <p> Overview: {props.movie.overview}</p>
    </div>
    <button onClick={() => checkout(props.movie)}> Add to Library </button> 
  </div>
  );
}


