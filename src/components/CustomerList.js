import React from 'react';
import Customer from './Customer';


import './Customer.css'

const CustomerList = (props) => {

  return (
    <div className="card-list"> 
        { props.customers.map(customer => (
            <Customer customer={customer} key={customer.id} currentCustomerCallback={props.currentCustomerCallback}/>
        ))}
    </div>
  );
}

export default CustomerList; 