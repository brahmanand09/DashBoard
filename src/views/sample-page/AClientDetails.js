
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import './AClientDetails.css';



const ClientDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [data, setData] = useState([]);
  useEffect(() => {
    if (id)
      fetch("http://localhost:4000/getAllUser", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userData");
          let filterData = data?.data?.filter(i => i.clientId === id);
          setData(filterData);
        })


  }, []);

  return (
    <div className='details-page'>
      <div className="client-header">
        <h1>Client Details</h1>
      </div>
      <div className="client-details">
        <div class="left-container">
          <div className='left-container-title'>
            <p>Client ID:</p>
            <p>Client Name: </p>
            <p>Start Date: </p>
            <p>End Date: </p>
            <p>Is Active: </p>
            <p>Client Manager: </p>
            <p>Client Engineer:</p>
          </div>
          <div className='left-container-value'>
            {data.map((item, index) => (
              <div key={index} className="client-item">
                <p>{item.clientId}</p>
                <p>{item.clientName}</p>
                <p>{item.startDate}</p>
                <p>{item.endDate}</p>
                <p>{item.isActive}</p>
                <p>{item.clientManager}</p>
                <p>{item.clientEngineer}</p>
                
              </div>
            ))}
          </div>
        </div>
        
        <div className="right-container" >
          <div className='h3'><h3>Contacts</h3></div>
          <div className='right-container-title'>
            <p>Contact:</p>
          </div>
          <div className='right-container-value'>
            {data.map((item, index) => (
              <div key={index} className="client-item">
                <p>{item.clientContact}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
      <div className="client-projects">
        <div className='project-container'>
        <h2>Projects</h2>

        </div>
      </div>  
    </div>
  );
};

export default ClientDetails;
