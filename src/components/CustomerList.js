import React, { useState } from 'react';
import Customer from './Customer';
import axios from 'axios';




const CustomerList = (props) => {


  const [customers, setCustomers] = useState([]);
  const [error, setErrorMessage] = useState([]);


    axios.get(`${props.url}customers`)
    .then((response)=> {
      setCustomers(response.data);
    }).catch((error) => {
      setErrorMessage(error);
      console.log(error);
    })
   
  return (
    <div className="card-list"> 
        { customers.map(customer => (
            <Customer customer={customer} key={customer.external_id}/>
        ))}
    </div>
  );
}

export default CustomerList; 