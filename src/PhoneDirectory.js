import React, {Component, useState} from 'react';
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
            let subscriberIndex = 0;
            subscribersList.forEach(function (subscriber, index){
             if(subscriber.id == subscriberId){
                 subscriberIndex = index;
             }
            });
            let newSubscribers = subscribersList;
            newSubscribers.splice(subscriberIndex, 1);
            //this.setState({subscribers: newSubscribers});
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
                //this.setState({SubscriberList: SubscriberList});
             }
    return(
        <Router>
            <Routes>
            <Route exact path="/"  Component={(props) => <ShowSubscribers {...props} SubscriberList={SubscriberList} deletesubscriberHandler={(subscriberId)=>deletesubscriberHandler(subscriberId)}/>}/>
            <Route exact path="/add" Component={({history}, props) => <AddSubscriber history={history} {...props} addsubscriberHandler={(newSubscriber)=>addsubscriberHandler(newSubscriber)}/>}/>
            </Routes>
        </Router>
        // <AddSubscriber addsubscriberHandler={this.addsubscriberHandler}/>
    )
}

// class PhoneDirectory extends Component{


//     constructor(){
//         super();
//         this.state = {
//             SubscriberList: [{
//                 id: '1',
//                 name:"Suraj kumar",
//                 phone:"9319236003"
//             },
//         {
//             id: '2',
//                 name:"Manish kumar",
//                 phone:"8448134417"
//         }]
//         }
//     }


//     deletesubscriberHandler = (subscriberId) =>{
//    let subscribersList = this.state.SubscriberList;
//    let subscriberIndex = 0;
//    subscribersList.forEach(function (subscriber, index){
//     if(subscriber.id == subscriberId){
//         subscriberIndex = index;
//     }
//    },this);
//    let newSubscribers = subscribersList;
//    newSubscribers.splice(subscriberIndex, 1);
//    this.setState({subscribers: newSubscribers});
//     }

//     addsubscriberHandler = (newSubscriber) => {
//        let SubscriberList = this.state.SubscriberList;
//        if(SubscriberList.length > 0){
//         newSubscriber.id = SubscriberList[SubscriberList.length - 1].id +1;   
//        }else{
//         newSubscriber.id = 1;
//        }
//        SubscriberList.push(newSubscriber);
//        this.setState({SubscriberList: SubscriberList});
//     }
//     render(){
//         return(
//             <Router>
//                 <Routes>
//                 <Route exact path="/"  Component={(props) => <ShowSubscribers {...props} SubscriberList={this.state.SubscriberList} deletesubscriberHandler={this.deletesubscriberHandler}/>}/>
//                 <Route exact path="/add" Component={({history}, props) => <AddSubscriber history={history} {...props} addsubscriberHandler={this.addsubscriberHandler}/>}/>
//                 </Routes>
//             </Router>
//             // <AddSubscriber addsubscriberHandler={this.addsubscriberHandler}/>
//         )
//     }
// }

// export default PhoneDirectory;