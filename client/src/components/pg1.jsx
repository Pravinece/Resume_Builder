import React from "react";
import homelogo from '../images/homeimagecv.png';
import { Navigate, useNavigate } from "react-router-dom";


export default function Enterpage(){
 const navigate=useNavigate() 
function template(){
    navigate('/templates')
}

    return(
        <>
        <div className="content-wrapper">
            <div className="left-content">
        <h1 className="title">
            <span>Create Your Professional Resume in Minutes.</span><br/>
             Stand Out and Land Your Dream Job with Our Easy-to-Use Resume Builder!"</h1>

        <button type="submit" onClick={template}> Get Start Now</button>
        </div>

        <div className="right-content">
         <img className="homeimg" src={homelogo} width='450px' height='500px'/>
        </div>
        </div>
        </>
    )
}