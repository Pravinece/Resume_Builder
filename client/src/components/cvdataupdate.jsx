import React, { useState } from "react";
import { User, Contact, UserCog, GraduationCap, Award } from 'lucide-react';
import Form1 from "./forms";
import {Form2} from "./forms";
import { Form3 } from "./forms";
import { Form4 } from "./forms";
import { Form5 } from "./forms";
import './cvupdate.css';


export default function CvdataUpdate() {
    const [formIndex, setFormIndex] = useState(1);

    const handleButtonClick = (formName) => {
      setFormIndex(formName);
    };
  
    const moveForward = () => {
      if (formIndex < 5) setFormIndex((prev) => prev + 1);
    };
  const movebackward=()=>{
    if(formIndex>=1)
      setFormIndex((prop)=>prop-1);
  }

  return (
    <>
    <div className="b">
      <div className="container1">
      <div className="grid1">
          <div className="sidebar1">
                <button type="button" className={formIndex === 1 ? "active" : ""} onClick={() => handleButtonClick(1)}><User /> Personal Information</button>
                <button type="button" className={formIndex === 2 ? "active" : ""} onClick={() => handleButtonClick(2)}><Contact /> Education</button>
                <button type="button" className={formIndex === 3 ? "active" : ""} onClick={() => handleButtonClick(3)}><UserCog /> Experience</button>
                <button type="button" className={formIndex === 4 ? "active" : ""} onClick={() => handleButtonClick(4)}><GraduationCap /> Contact Information</button>
                <button type="button" className={formIndex === 5 ? "active" : ""} onClick={() => handleButtonClick(5)}><Award /> Awards/Certification</button>
          </div>


        <div className="content1">
        {formIndex === 1 && <Form1 handlenext={moveForward}/>}
        {formIndex === 2 && <Form2 handlenext={moveForward} handleprev={movebackward}/>}
        {formIndex === 3 && <Form3 handlenext={moveForward} handleprev={movebackward}/>}
        {formIndex === 4 && <Form4 handlenext={moveForward} handleprev={movebackward}/>}
        {formIndex === 5 && <Form5  handleprev={movebackward}/>}
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
