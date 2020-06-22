import React from 'react';


export default function MovieCard({movie}) {
  return (
  <div className="card">
    <img className="card--image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title}/>
    <div className="class-content"> 
      <h2 className='card--title'> {movie.title} </h2>
      <p><small>RELEASE DATE: {movie.release_date}</small></p>
      <p> Overview: {movie.overview}</p>
    </div>
  </div>
  );
}

