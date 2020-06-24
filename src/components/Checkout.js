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

      return (


          <div>checkout</div>


      )




}



export default Checkout;