import React from 'react';
import './Customer.css'

const Customer = (props) => {

//   account_credit: 13.15
// address: "Ap #292-5216 Ipsum Rd."
// city: "Hillsboro"
// id: 1
// movies_checked_out_count: 0
// name: "Shelley Rocha"
// phone: "(322) 510-8695"
// postal_code: "24309"
// registered_at: "2015-04-29T14:54:14.000Z"
// state: "OR"

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