import React from 'react';

END_POINT = 'customers'

const CustomerList = (props) => {

  const [customers, setCustomers] = useState([]);
  const [error, setErrorMessage] = useState([]);


    axios.get(`${props.url}${END_POINT}`)
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