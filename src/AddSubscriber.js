import React, {useState} from "react";
import './common/common1.css';
import Header from "./Header";
import Button1 from "./button";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";



export default function AddSubscriber(props) {
   
    const[addSubscriberForm,setaddSubscriberForm] = useState({
        id:0,
        name:'',
        phone:''
    })
   

    const navigate = useNavigate();


               function inputChangedHandler (e) {
                    const state = addSubscriberForm;
                    state[e.target.name] = e.target.value;
                    setaddSubscriberForm({...state});
                }
            
                const onFormSubmitted = (e) =>{
                e.preventDefault();
                props.addsubscriberHandler(addSubscriberForm);
                setaddSubscriberForm({id:0, name:'', phone:''});
                navigate("/");
                }

    const {name,phone} = addSubscriberForm;

    return(
        <Fragment>
    <div className="header-styling">
    <Header heading="Add Subsrciber"/>
    </div>
    <div>
    <Link to="/"><Button1 heading="Back"/></Link>
    </div>
    <div>
        <form className="form-style" onSubmit={onFormSubmitted}>
         <label className="label-design" htmlFor="name">Name: </label><br/>
         <input className="input-design" id="name" name="name" onChange={inputChangedHandler}/><br/>
         <label className="label-design" htmlFor="phone">Phone: </label><br/>
         <input className="input-design" id="phone" name="phone" onChange={inputChangedHandler}/><br/>
         
        <div className="span-container-for-subscriber">
         <span>Subsrciber to be added: </span><br/>
         <span className="label-design">Name: {name}</span><br/>
         <span className="label-design">Phone: {phone}</span><br/> 
         <button type="submit" className="button-style2">Add</button>
        </div>
        </form>
    </div>
    </Fragment>
    )
}
