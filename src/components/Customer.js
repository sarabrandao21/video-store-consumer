import React from 'react';
import './Customer.css'

const Customer = (props) => {


  return (
  
    <div className="customer-card"> 
      <div className="customer-info">
        <h3> {props.customer.name} <small> {props.customer.phone} </small></h3>
        <p> {props.customer.address} </p>
        <p> {props.customer.city}, {props.customer.state} {props.customer.postal_code}</p>
      </div> 
      <div className="acct-info">
        <p> Checked Out Count: {props.customer.movies_checked_out_count}</p>
        <p> Account Credit: ${props.customer.account_credit}</p>
      </div>
    </div>
  
  );

}




export default Customer; 