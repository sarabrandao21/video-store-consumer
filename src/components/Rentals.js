import React, { useState, useEffect } from "react";
import axios from 'axios';
import RentalCard from './RentalCard';

const Rentals = (props) => {
  const [error, setErrorMessage] = useState([]);

  const checkIn = (title, customer_id) => { 
      
      axios.post(`${URL}rentals/${title}/return`, {
          title: title, 
          customer_id: customer_id
        }) 
          .then((response)=> {
            console.log(response.data);
          })
          .catch((error) => {
            setErrorMessage(error);
          }); 
    }
 

    return (
      <div> 
      <div className="card-list"> 
        { props.rentals.map(rental => (
            <RentalCard rental={rental} key={rental.external_id} checkInCallback={checkIn} customers={props.customers} library={props.library}/>
        ))}
     </div>
     </div>
    )

}

export default Rentals;