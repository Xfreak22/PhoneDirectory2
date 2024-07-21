import { useState, useEffect } from "react";

export async function downloadLocationDetails() {
    
    const rawresponse = await fetch("https://ipapi.co/json");
    const data = await rawresponse.json();
    return data;
}


export function useLocationDetail() {
    const [locationDetail,setLocationDetail] = useState({"city":"","region":"","country_name":""});

    useEffect(()=>{

          async function updatelocation() {
            const response = await downloadLocationDetails();
            setLocationDetail(response);
          }

          updatelocation();


    },[]);

    return locationDetail;
}