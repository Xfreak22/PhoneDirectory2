import React, { Fragment, useCallback, useEffect, useMemo, useState} from 'react';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter as Router, Route, Routes, json} from 'react-router-dom';
import AddSubscriber from './AddSubscriber';
import Footer from './Footer';
import {SubscriberCountContext} from './SubscriberCountContext';

export default function PhoneDirectory() {
    
        const[SubscriberList,setSubscribersList]= useState([])

        function loaddata() {
            fetch("http://localhost:7081/contacts")
            .then(input=>input.json())
            .then(data=>setSubscribersList(data));
           } 


        useEffect(()=>{
            loaddata();
         },[])


     const deletesubscriberHandler = useCallback((subscriberId)=> {
        fetch("http://localhost:7081/contacts/"+ subscriberId, {method:"DELETE"})
        .then(input=>input.json())
        .then(data=>{

        loaddata();
        })
     }, [])


     const numberOfSubscriptions = useMemo(()=>{
            return SubscriberList.length;
     },[SubscriberList])
    //   function deletesubscriberHandler(subscriberId){
    //         // let subscribersList = SubscriberList;
    //         // const newSubscribers = subscribersList.filter((subscriber)=> (subscriber.id !== subscriberId));
    //         // setSubscribersList(newSubscribers);
    //         fetch("http://localhost:7081/contacts/"+ subscriberId, {method:"DELETE"})
    //         .then(input=>input.json())
    //         .then(data=>{

    //         loaddata();
    //   })}


           function addsubscriberHandler (newSubscriber) {

                fetch(" http://localhost:7081/contacts",
                 {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/Json"
                    },
                    body: JSON.stringify(newSubscriber)
                })


                loaddata();
            
                // if(SubscriberList.length > 0){
                //  newSubscriber.id = SubscriberList[SubscriberList.length - 1].id +1;   
                // }else{
                //  newSubscriber.id = 1;
                // }
                // SubscriberList.push(newSubscriber);
                // setSubscribersList(SubscriberList);
             }
    return(
        <Fragment>
        <Router>
            <Routes>
            <Route exact path="/"  Component={(props) => <ShowSubscribers {...props} SubscriberList={SubscriberList} deletesubscriberHandler={(subscriberId)=>deletesubscriberHandler(subscriberId)}/>}/>
            <Route exact path="/add" Component={({history}, props) => <AddSubscriber history={history} {...props} addsubscriberHandler={(newSubscriber)=>addsubscriberHandler(newSubscriber)}/>}/>
            </Routes>
        </Router>
        <SubscriberCountContext.Provider value={numberOfSubscriptions}>
        <Footer></Footer>
        </SubscriberCountContext.Provider>
        </Fragment>
       
    )
}

