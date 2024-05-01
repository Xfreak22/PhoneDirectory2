import React from 'react';
import Header from './Header';
import './ShowSubscribers.css';
import './common/common1.css';
import Button1 from './button';
import { Link } from 'react-router-dom';

export default function ShowSubscribers({SubscriberList,deletesubscriberHandler}) {

  return (
    <div >
      <div className="header-styling">
      <Header heading="Phone Directory"/>
      </div>
     <Link to="/add"><Button1 heading="Add"/></Link>
  <div className='sub-heading-div-margin-for-name-and-num'>
   <span style={{color: "darkslategrey", margin: 30, padding: 10, width: "auto"}}>Name</span>
   <span style={{color: "darkslategrey", margin: "auto", padding: 10, width: "auto"}}>Phone</span>
  </div>

    { 
    SubscriberList.map(sub =>{
       return  <div key={sub.id} className='Content'>
              <span className='Content-span-styling'> {sub.name}</span>   
              <span className='Content-span-styling1'>{sub.phone}</span>
              <button type='submit' className='button-style3' onClick={()=>deletesubscriberHandler(sub.id)}>Delete</button>
               </div>
      })
    } 

  </div>
  )
}

