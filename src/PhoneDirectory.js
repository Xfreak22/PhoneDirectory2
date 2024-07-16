import React, { Fragment, useCallback, useEffect, useReducer, useState} from 'react';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddSubscriber from './AddSubscriber';
import Footer from './Footer';
import {SubscriberCountContext} from './SubscriberCountContext';
import {TotalSubscriberReducer} from './TotalSubscriberReducer'

export default function PhoneDirectory() {
    
        const[SubscriberList,setSubscribersList]= useState([])
        const [state,dispatch] = useReducer(TotalSubscriberReducer, {count:0})

      async  function loaddata() {
            const rawresponse = await fetch("http://localhost:7081/contacts");
            const data = await rawresponse.json();
            
            dispatch({"type":"UPDATE_COUNT", payload:data.length});
            setSubscribersList(data);
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
        <SubscriberCountContext.Provider value={state.count}>
        <Footer></Footer>
        </SubscriberCountContext.Provider>
        </Fragment>
       
    )
}

