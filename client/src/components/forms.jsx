import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Languages } from 'lucide-react';
import Cv1 from './cv1';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef } from 'react';
import './cvupdate.css'
import { format } from 'date-fns';
// const childRef = useRef();
// const tno=2;


export default function Form1({ handlenext }) {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    profession: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    profile:'',
    profileid: localStorage.getItem('userId')
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_BACKEND_URI}/cvupdate`, formData)
      .then(response => {
        console.log(response.data);
        handlenext();
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

const imgtodata = (e) => {
    const file = e.target.files[0]; // Get the first file from the input
    if (file) {
      const value = URL.createObjectURL(file); 
      const name = e.target.name; // Get the name attribute from the input
  
      setFormData({
        ...formData,
        [name]: value, // Use the name attribute to set the form data
      });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Details</h2>
      <div>
        <label>First Name</label>
        <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
      </div>
      <div>
        <label>Profession</label>
        <input type="text" name="profession" value={formData.profession} onChange={handleChange} />
      </div>
      <div>
        <label>Address</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
      </div>
      <div>
        <label>City</label><br/>
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
      </div>
      <div>
        <label>State</label>
        <input type="text" name="state" value={formData.state} onChange={handleChange} />
      </div>
      <div>
        <label>Zip Code</label>
        <input type="text" name="zipcode" value={formData.zipcode} onChange={handleChange} />
      </div>
      <div>
      <label>Profile</label>
        <input type="file" className='file' name='profile'  onChange={imgtodata}/>
      </div>
      <button type="submit">Next session</button>
    </form>
  );
}

// Form2 Component
export function Form2({ handlenext, handleprev }) {
    const [formData, setFormData] = useState({
        institutename: '',
        course: '',
        country: '',
        institutestate: '',
        institutestart: '',
        institutefinish: '' ,
        profileid: localStorage.getItem('userId')
          });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'institutestart' || name === 'institutefinish') {
          const formattedDate = format(new Date(value), 'MM-dd-yyyy');
          setFormData({
              ...formData,
              [name]: formattedDate,
          });
      } else {
          setFormData({
              ...formData,
              [name]: value,
          });
      }

      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_BACKEND_URI}/cvupdate2`, formData)
          .then(response => {
            console.log(response.data);
            handlenext();
          })
          .catch(error => {
            console.error('There was an error!', error);
          });
      };
  return (
    <form onSubmit={handleSubmit}>
      <h2> Education</h2>
      <div>
        <label>Institution Name</label>
        <input type="text" name='institutename' onChange={handleChange}/>
      </div>
      <div>
        <label>Course</label>
        <input type="text" name="course" onChange={handleChange}/>
      </div>
      <div>
        <label>Country</label>
        <input type="text" name='country' onChange={handleChange}/>
      </div>
      <div>
        <label>State</label>
        <input type="text" name='institutestate'onChange={handleChange}/>
      </div>
      {/* <div>
        <label>Time Period</label>
        <input type="checkbox"/><p>currently working</p>
      </div> */}

      <div>
        <label>Start</label><br/>
        <input type="month" name='institutestart' onChange={handleChange}/>
      </div>
      <span>
        <label>Finish</label><br/>
        <input type="month"  name='institutestart' onChange={handleChange}/>
      </span>
      <span>
        <button type="button" onClick={handleprev}>❮</button>
        <button type="submit">Next session</button>
      </span>
    </form>
  );
}

// Form3 Component
export function Form3({ handlenext, handleprev }) {
    const [formData, setFormData] = useState({
        employer: '',
        company: '',
        employeraddress: '',
        role: '',
        experiencestart: '',
        experiencefinish: '',
        experiencenote:'',
        profileid: localStorage.getItem('userId')
          });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'experiencestart' || name === 'experiencefinish') {
          const formattedDate = format(new Date(value), 'MM-dd-yyyy');
          setFormData({
              ...formData,
              [name]: formattedDate,
          });
      } else {
          setFormData({
              ...formData,
              [name]: value,
          });
      }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_BACKEND_URI}/cvupdate3`, formData)
          .then(response => {
            console.log(response.data);
            handlenext();
          })
          .catch(error => {
            console.error('There was an error!', error);
          });
      };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Experience</h2>
      <div>
        <label>Employer</label>
        <input type="text" name='employer' onChange={handleChange}/>
      </div>
      <div>
        <label>Company</label>
        <input type="text" name='company' onChange={handleChange}/>
      </div>
      <div>
        <label>Address</label>
        <input type="text" name='experienceaddress' onChange={handleChange}/>
      </div>
      <div>
        <label>Role</label><br/>
        <input type="text" name='role' onChange={handleChange}/>
      </div>
      <div>
        <label>Start</label><br/>
        <input type="month" name='experiencestart' onChange={handleChange}/>
      </div>
      <div>
        <label>Finish</label><br/>
        <input type="month" name='experiencefinish' onChange={handleChange}/>
      </div>
      <div className='notes' >
            <label>Notes</label><br/>
        <input type="text"  name='experiencenote' onChange={handleChange}/>
      </div>
      <div>
        <button type="button" onClick={handleprev}>❮</button>
        <button type="submit" >Next session</button>
      </div>
    </form>
  );
}

// Form4 Component
export function Form4({ handlenext, handleprev }) {
    const [formData, setFormData] = useState({
        emailaddress: '',
        phone: '',
        linkedin: '',
        twitter: '',
        github: '' ,
        Languages:'',
        skills:'',
        intro: '',
        profileid: localStorage.getItem('userId')

          });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_BACKEND_URI}/cvupdate4`, formData)
          .then(response => {
            console.log(response.data);
            handlenext();
          })
          .catch(error => {
            console.error('There was an error!', error);
          });
      };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact</h2>
      <div>
        <label>Email Address</label>
        <input type="email" name='emailaddress' onChange={handleChange}/>
      </div>
      <div>
        <label>Phone Number</label>
        <select className="country">
          <option value="volvo">+91</option>
          <option value="saab">+123</option>
          <option value="opel">+151</option>
          <option value="audi">+2</option>
        </select>
        <input type="tel" name='phone' onChange={handleChange}/>
      </div>
      <div>
        <label>LinkedIn Profile link</label>
        <input type="text" name='linkedin' onChange={handleChange}/>
      </div>
      <div>
        <label>Twitter Profile link</label>
        <input type="text" name='twitter' onChange={handleChange}/>
      </div>
      <div>
        <label>Github link</label>
        <input type="text" name='github' onChange={handleChange}/>
      </div>
      <div>
        <label>Languages</label>
        <input type="text" name='languages' onChange={handleChange}/>
      </div>
      <div>
        <label>Skills</label>
        <input type="text" name='skills' onChange={handleChange}/>
      </div>
      <div className='notes'>
        <label>Introduction</label><br/>
        <textarea type="text" className='long-notes' name='intro'  onChange={handleChange}/>
      </div> 
        
         <div>
        <button type="button" onClick={handleprev}>❮</button>
        <button type="submit" >Next session</button>
      </div>
    </form>
  );
}

export function Form5({ handleprev ,tno}) {
  // console.log(tno);
  const [formData, setFormData] = useState({
    organization: '',
    awardtitle: '',
    awarddate: '',
    awardnote:'',
    profileid: localStorage.getItem('userId')
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'awarddate') {
      const formattedDate = format(new Date(value), 'MM-dd-yyyy');
      setFormData({
          ...formData,
          [name]: formattedDate,
      });
  } else {
      setFormData({
          ...formData,
          [name]: value,
      });
  }
  };
    const navigate=useNavigate();
   const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_BACKEND_URI}/cvupdate5`, formData)
      .then(response => {
        console.log(response.data);
        navigate(`/cv/${tno}`);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };



  return (
    <form onSubmit={handleSubmit}>
      <h2>Awards</h2>
      <div>
        <label>Name of Organization</label>
        <input type="text" name="organization"  onChange={handleChange} />
      </div>
      <div>
        <label>Award Title</label>
        <input type="text" name="awardtitle"  onChange={handleChange} />
      </div>
      <div>
        <label>Date of Acquisition</label>
        <input type="date" name="awarddate" onChange={handleChange} />
      </div>
      <div className='notes'>
        <label>Notes</label><br/>
        <textarea type="text" className='long-notes' name="awardnote"  onChange={handleChange} />
      </div>
      <div>
        <button type="button" onClick={handleprev}>❮</button>
        <button type="submit">Finish</button>

      </div>
    </form>
  );
}
