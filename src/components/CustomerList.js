import React, { useState, useEffect } from 'react';
import Customer from './Customer';
import axios from 'axios';


import './Customer.css'

const CustomerList = (props) => {


  const [customers, setCustomers] = useState([]);
  const [error, setErrorMessage] = useState([]);


  useEffect(() => {
    axios.get(`${props.url}customers`)
    .then((response)=> {
      console.log(response.data);
      setCustomers(response.data);
    }).catch((error) => {
      setErrorMessage(error);
      console.log(error);
    });
    }, []);
  

  return (
    <div className="card-list"> 
        { customers.map(customer => (
            <Customer customer={customer} key={customer.id} currentCustomerCallback={props.currentCustomerCallback}/>
        ))}
    </div>
  );
}

export default CustomerList; 