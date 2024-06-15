import keyboard from '../images/cvv.jpg';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './template.css';
import cv1 from '../images/cv1.webp';
import cv2 from '../images/cv2.jpg';
import cv3 from '../images/cv3.webp';

const Template = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const slides = [
    { img: cv1, name: 'MARIANA ANDRESON', description: 'MARKETING MANAGER' },
    { img: cv2, name: 'KHALIL RICHARDSON', description: 'JOURNALIST' },
    { img: cv3, name: 'DANI SCHWAIGER', description: 'WEB DEVELOPER' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

//   const handleupdate = (i) => {
//     navigate(`/cvupdate/${i}`);
//   };
const handleupdate = () => {
    navigate('/cvupdate');
  };

  return (
    < >
    <div className='bdy'>
      <div className="header">
        <h1>CV Carving</h1>
      </div>
      <div className="carousel">
        {slides.map((slide, index) => (
          <div className={`slide ${index === currentIndex ? 'active' : ''}`} key={index}>
            <div className="box description-box">
              <h1>{slide.name}</h1>
              <p>{slide.description}</p>
              <div>
                <input type="color" defaultValue='#34495e'/>
                <input type="color" defaultValue='#636e72'/>
                <input type="color" defaultValue='#2C3A47'/>
              </div>
              <button onClick={() => handleupdate(index)}>Select this template</button>
              <p>You can always change your template later.</p>
            </div>
            <div className="box image-box">
              <div className="img-backgrnd">
                <button className="prev1" onClick={prevSlide}>❮</button>
                <img src={slide.img} alt={slide.name} />
                <button className="next1" onClick={nextSlide}>❯</button>
              </div>
            </div>
          </div>
        ))}
        <img className="keyboard" src={keyboard} alt="Keyboard background" />
      </div>
      </div>
    </>
  );
};

export default Template;
