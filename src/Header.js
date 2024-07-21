import React, { Fragment, useEffect, useState } from "react";
import './ShowSubscribers.css';
import { downloadLocationDetails, useLocationDetail } from "./customhook";

const Header = function(props) {


    const locationDetail = useLocationDetail();

    const {city,region,country_name} = locationDetail;

    return(
        <Fragment>
        <div> 
            {props.heading}
        </div>
        <div><br/>
        <h4>&nbsp; &nbsp; Welcome user, You are from {city} - {region} on {country_name} </h4>
        </div>
        </Fragment>
    )
}

export default Header;