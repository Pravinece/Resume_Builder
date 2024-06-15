import React from "react";
import Header from "./header";
import Enterpage from "./pg1";
import { useParams } from "react-router-dom";
import About from "./about";


export default function Home(){
    const {id}= useParams();
    return(
        <>
        <Header id={id}/>
        <Enterpage />
        <About/>
        </>
    )
}