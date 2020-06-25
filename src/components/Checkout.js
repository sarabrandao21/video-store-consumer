import React from "react";
import axios from 'axios';
import PropTypes from 'prop-types';

const Checkout = (props) => {
    let date = new Date();
    date.setDate(date.getDate() + 7);
    const onCheckout = () => {
        
        axios.post(`${props.url}rentals/${props.movie.title}/check-out`, {
          due_date: `${date}`,
          customer_id: props.customer.id,
          title: props.movie.title
        }).then((response) => {
          console.log(response);
        }).catch((error) => {
          console.log(error);
        });
        props.setStateEmpty()
    };

      const customerName = props.customer.name
      const movieTitle = props.movie.title
      if(movieTitle !== undefined && customerName !== undefined ){
          return (
              <div>
                <h1>Details for {customerName} checkout</h1>
                <p>You are checking out {movieTitle.toString()} due by {date.toString()}</p>
                <button className="add-movie-button" onClick={onCheckout}> confirm checkout </button>
              </div>
          );
      }else {
          return (
            <h1> Select customer and movie for checkout </h1>
          );
        }
}

//<Checkout setStateEmpty={setStateEmpty} movie={movie} customer={customer} url={URL}/>

Checkout.propTypes = {
  setStateEmpty: PropTypes.func, 
  movie: PropTypes.object, 
  customer: PropTypes.object, 
  url: PropTypes.string, 
}

export default Checkout;