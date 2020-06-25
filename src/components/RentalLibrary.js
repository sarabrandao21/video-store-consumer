import React, { useState, useEffect } from 'react';
import MovieCard from "./MovieCard";
import PropTypes from 'prop-types';

function RentalLibrary(props) { 
    
    return (
    <div>
        <div className="card-list"> 
            { props.library.map(movie => (
                <MovieCard movie={movie} key={movie.external_id} currentMovieCallback={props.currentMovieCallback}/>
            ))}
        </div>
    </div>
    );
}

RentalLibrary.propTypes = {
    library: PropTypes.array,
    currentMovieCallback: PropTypes.func
}

export default RentalLibrary;