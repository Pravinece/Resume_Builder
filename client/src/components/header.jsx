import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './home.css'


export default function Header({id}) {
  console.log(id);
  const navigate=useNavigate();

const handleProfileClick = () => {
    navigate(`/profile/${id}`);
}
  return (
    <div className="header">
      <div className="header-title">
        <h4>CV Carving</h4>
      </div>
      <div className="nav-links">
        <Link to='/templates'>CV Templates</Link>
        <button onClick={handleProfileClick}>profile</button>
        <Link to='/downloads'>Downloads</Link>
      </div>
    </div>
  );
}
