import React, { useState, useEffect } from 'react';
import { Apicall , ipwhois} from './apicall/Apicall';
import Base from './base/Base';
import Layout from './base/layout';


const App = () =>{

  const [ipdetails, setIpdetails] = useState([])
  const [whois, setWhois] = useState([])

  const getDetails = () =>{
    //e.preventDefault();
    Apicall().then(response =>{
      setIpdetails(response)     
     // console.log(ipdetails)
    })
    ipwhois(ipdetails.IPv4).then(response =>{
      setWhois(response)
      console.log(whois)
    })
   }
  return(
    <div> 
      <Layout onClick={getDetails()}/>
      <Base ipdetails={whois}/>
     </div>
  )
}

export default App;
