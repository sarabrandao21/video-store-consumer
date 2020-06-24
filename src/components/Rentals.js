import React, { useState, useEffect } from "react";
import axios from 'axios';
import RentalCard from './RentalCard';

const Rentals = (props) => {

  useEffect(() => {
    axios
      .get(`${URL}rentals/overdue`)
      .then((response)=> {
        console.log(response.data);
        setLibrary(response.data); 
      })
      .catch((error) => {
        setErrorMessage(error);
      });
    }, []); 

 

    return (

      <div className="card-list"> 
        { rentals.map(rental => (
            <RentalCard rental={rental} key={rental.external_id} checkInCallback={props.checkInCallback}/>
        ))}
     </div>
    )

}

export default Rentals;