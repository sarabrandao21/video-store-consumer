import React, { useState, useEffect } from 'react';
import MovieCard from "./MovieCard";


function RentalLibrary(props) {
    
    return (
    <div>
        <p>Movies:</p>
            <div className="card-list"> 
                { props.library.map(movie => (
                    <MovieCard movie={movie} key={movie.external_id} />
                ))}
            </div>
    </div>
    );
}

export default RentalLibrary;