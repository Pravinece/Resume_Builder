import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './cv1.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
  // let {id}=useParams();

function Cv1() {
  const pdfRef=useRef();

  const downloadPDF = () => {
    const input = pdfRef.current;
  
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png'); 
      const pdf = new jsPDF('p', 'mm', 'a4', true);
  
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
  
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
  
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
  
      // Adjust the dimensions to prevent height overflow
      const scaledWidth = imgWidth * ratio;
      const scaledHeight = imgHeight * ratio;
  
      // Add the image to the PDF, ensuring it is centered
      pdf.addImage(imgData, 'PNG', 0, 0, scaledWidth, scaledHeight);
  
      // Save the PDF
      pdf.save('Resume.pdf');
    });
  };
  
// const downloadPDF = () => {
//   const input = pdfRef.current;

//   html2canvas(input, { scale: 2 }).then((canvas) => {
//     const imgData = canvas.toDataURL('image/png'); 
//     const pdf = new jsPDF('p', 'mm', 'a4', true);

//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = pdf.internal.pageSize.getHeight();

//     const imgWidth = canvas.width;
//     const imgHeight = canvas.height;

//     const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

//     const imgX = (pdfWidth - imgWidth * ratio) / 2;
//     const imgY = 0;

//     pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);

//     pdf.save('Resume.pdf');
//   });
// };
  // ======================form1data=====================
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    profession: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    profile:''
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const p_id=localStorage.getItem('userId');
        const res = await axios.get(`${process.env.BACKEND_URI}/form/${p_id}`);
        setData(res.data[0]);
        console.log(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
// =================form2data====================================
  const [data2, setData2] = useState({
    institutename: '',
    course: '',
    country: '',
    institutestate: '',
    institutestart: '',
    institutefinish: '' ,
      });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const p_id=localStorage.getItem('userId');
        const res = await axios.get(`${process.env.BACKEND_URI}/form2/${p_id}`);
        setData2(res.data[0]);
        console.log(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
// =======================form3data==============================

const [data3, setData3] = useState({
  employer: '',
  company: '',
  employeraddress: '',
  role: '',
  experiencestart: '',
  experiencefinish: '',
  experiencenote:'',
    });

useEffect(() => {
  const fetchData = async () => {
    try {
      const p_id=localStorage.getItem('userId');
      const res = await axios.get(`${process.env.BACKEND_URI}/form3/${p_id}`);
      setData3(res.data[0]);
      console.log(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);

// ======================form4data======================

const [data4, setData4] = useState({
  emailaddress: '',
  phone: '',
  linkedin: '',
  twitter: '',
  intro: '',
  github: '' ,
  languages:'',
  skills:''

    });
    const lang = data4.languages ? data4.languages.split(',') : [];
    const skill = data4.skills ? data4.skills.split(',') : [];

useEffect(() => {
  const fetchData = async () => {
    try {
      const p_id=localStorage.getItem('userId');
      const res = await axios.get(`${process.env.BACKEND_URI}/form4/${p_id}`);
      setData4(res.data[0]);
      console.log(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);

// =========================form5data=========================
const [data5, setData5] = useState({
  organization: '',
  awardtitle: '',
  awarddate: '',
  awardnote:'',
});

useEffect(() => {
  const fetchData = async () => {
    try {
      const p_id=localStorage.getItem('userId');
      const res = await axios.get(`${process.env.BACKEND_URI}/form5/${p_id}`);
      setData5(res.data[0]);
      console.log(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);


  return (
    <>
    <div className="resume" ref={pdfRef}>
      <div className="sidebar">
        <div className="photo">
          <img src={data.profile} alt={`${data.firstname} ${data.lastname}`} />
        </div>
        <div className="contact">
          <h2>Details</h2>
          <p><strong>Address:</strong> {data.address},<br/> {data.city},<br/> {data.state}, <br/>{data.zipcode}</p>
        </div>
        <div className="education">
          <h2>Contact</h2>
          <p><strong>Phone</strong> <br/>{data4.phone}</p>
          <p><strong>Email</strong><br/>{data4.emailaddress}</p>
          <p><strong>LinkedIn</strong><br/>{data4.linkedin}</p>
          <p><strong>Twitter</strong><br/>{data4.twitter}</p>
          <p><strong>Github</strong><br/>{data4.github}</p>
          <p><strong>Introduction</strong><br/>{data4.intro}</p>
        </div>
        <div className="expertise">
          <h2>Expertise</h2>
          <ul>
      {skill.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </ul>        </div>
        <div className="language">
          <h2>Language</h2>
          <ul>
      {lang.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </ul>
        </div>
      </div>
      <div className="main-content">
        <h1>{data.firstname} {data.lastname}</h1>
        <h2>{data.profession}</h2>
        <p className="summary">{data4.intro}</p>

        <div className="experience">
          <h2>Education</h2>
          <p><strong>Institute Name</strong> <br/>{data2.institutename}</p>
          <p><strong>Course</strong><br/>{data2.course}</p>
          <p><strong>Country</strong><br/>{data2.country}</p>
          <p><strong>Institute State</strong><br/>{data2.institutestate}</p>
          <p><strong>Institute Start</strong><br/>{data2.institutestart}</p>
          <p><strong>Institute Finish</strong><br/>{data2.institutefinish}</p>
         </div>
          <div className="experience">
         <h2>Experience</h2>
         <p><strong>Employer</strong><br/>{data3.employer}</p>
         <p>{data3.experiencestart} to {data3.experiencefinish}</p>
          <p>{data3.company}</p>
          <p>{data3.employeraddress}</p>
          <p><br/>{data3.experiencenote}</p>

        </div>

        <div className="reference">
          <h2>Reference</h2>
          <h6><strong>{data.firstname} {data.lastname}</strong><br/></h6>
          <h6>{data.profession}</h6>
          <p>Phone:     {data4.phone}</p>
          <p>Email:     {data4.emailaddress}</p>
        </div>
      </div>
    </div>
    <div>
      <button className='downloadbutton' onClick={downloadPDF}>Download</button>
    </div>
    </>
  );
}

export default Cv1;
