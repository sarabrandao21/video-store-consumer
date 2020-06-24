import React, { useState, useEffect } from "react";
import axios from 'axios';

const Checkout = (props) => {

    let date = new Date();

    date.setDate(date.getDate() + 7);
      useEffect(() => {
        axios.post(`${props.url}rentals/${props.movie.title}/check-out`, {
          due_date: `${date}`,
          customer_id: props.customer.id,
          title: props.movie.title
        }).then((response) => {
          console.log(response);
        }).catch((error) => {
          console.log(error);
        })
      }, []);

      if( props.movie.title !== undefined && props.customer.name !== undefined ){

          return (
              <div>
                <h1>Thank you, {props.customer.name}</h1>
                <p>{props.movie.title.toString()} due by {date.toString()}</p>
            
              </div>
          );
      }else {

          return (
            <h1> Select customer and movie for checkout </h1>
          );
        }
}



export default Checkout;