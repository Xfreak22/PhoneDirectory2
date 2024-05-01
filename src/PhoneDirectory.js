import React, { useState} from 'react';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddSubscriber from './AddSubscriber';

export default function PhoneDirectory() {
    
        const[SubscriberList,setSubscribersList]= useState([{
                            id: '1',
                            name:"Suraj kumar",
                            phone:"9319236003"
                        },
                    {
                        id: '2',
                            name:"Manish kumar",
                            phone:"8448134417"
                    }])

      function deletesubscriberHandler(subscriberId){
            let subscribersList = SubscriberList;
            const newSubscribers = subscribersList.filter((subscriber)=> (subscriber.id !== subscriberId));
            setSubscribersList(newSubscribers);
             }


           function addsubscriberHandler (newSubscriber) {
                if(SubscriberList.length > 0){
                 newSubscriber.id = SubscriberList[SubscriberList.length - 1].id +1;   
                }else{
                 newSubscriber.id = 1;
                }
                SubscriberList.push(newSubscriber);
                setSubscribersList(SubscriberList);
             }
    return(
        <Router>
            <Routes>
            <Route exact path="/"  Component={(props) => <ShowSubscribers {...props} SubscriberList={SubscriberList} deletesubscriberHandler={(subscriberId)=>deletesubscriberHandler(subscriberId)}/>}/>
            <Route exact path="/add" Component={({history}, props) => <AddSubscriber history={history} {...props} addsubscriberHandler={(newSubscriber)=>addsubscriberHandler(newSubscriber)}/>}/>
            </Routes>
        </Router>
       
    )
}

