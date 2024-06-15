import React from "react";
import { Facebook, Instagram, Linkedin, Twitter , Copyright} from 'lucide-react';
import "./home.css"

export default function About(){
    return (<>
     <div className="about-container">
    <div className="about-content">
    <h3>CV Carving</h3>
    <h5>Update Rights to your Inbox</h5>
    <span className="subscribe-form">
    <input type="email" placeholder="Email Address"></input>
    <button type="submit">Subscribe</button>
    </span>
    <div className="footer-links">
        <Copyright/>
        <h5>CV Carving 2020</h5>
        <h5>Privacy policy</h5>
        <h5>Terms of use</h5>
    </div>
    </div>

    <div className="points">
       <ul>
       <li><strong>Our Story</strong></li>
        <li>FAQ</li>
        <li>Contact</li>
       </ul>
       <ul>
        <li><strong>Service</strong></li>
        <li>Build Resume</li>
        <li>Cover Letter</li>
        <li>Template</li>
       </ul>
       <ul>
        <li><strong>About Us</strong></li>
        <li>Developer</li>
        <li>Meet Our Team</li>
        <li>Join Tabulio</li>
       </ul>
    </div >
   </div>
    


    <div className="social-icons">
       <Facebook/>
       <Instagram/>
       <Linkedin/>
       <Twitter/>
    </div>
    </>)
}