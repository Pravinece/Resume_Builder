import './cv2.css';
import React, { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import axios from 'axios';
import jsPDF from 'jspdf';
import { format } from 'date-fns';
const CV2 = () => {
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
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URI}/form/${p_id}`);
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
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URI}/form2/${p_id}`);
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
          const res = await axios.get(`${import.meta.env.VITE_BACKEND_URI}/form3/${p_id}`);
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
          const res = await axios.get(`${import.meta.env.VITE_BACKEND_URI}/form4/${p_id}`);
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
          const res = await axios.get(`${import.meta.env.VITE_BACKEND_URI}/form5/${p_id}`);
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
      <div className="left">
        <div className="photo">
          <img src={data.profile} alt={data.firstname} />
        </div>
        <h1>{data.firstname}</h1>
        <h2>{data.profession}</h2>
        <section className="about">
          <h3>About Me</h3>
          <p>
          {data3.intro}          </p>
        </section>
        <section className="skills">
          <h3>Skills</h3>
          <ul>
          {skill.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
          </ul>
        </section>
        <section className="skills">
          <h3>Languages</h3>
          <ul>
          {lang.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
          </ul>
        </section>
        <section className="contact">
          <h3>Contact</h3>
          <p>{data4.phone}</p>
          <p>{data4.emailaddress}</p>
          <p>{data.address}</p>
        </section>
      </div>
      <div className="right">
        <section className="experience">
          <h3>Work Experience</h3>
          <div className="job">
            <h4>{data4.employer}</h4>
            <h5>{data4.role}</h5>
            <h5>{data4.company}</h5>
            <p>{data4.employeraddress}</p>
            <p>{data4.experiencestart}</p>
            <p>{data4.experiencefinish}</p>
            <p>{data4.experiencenote}</p>
            
          </div>

        </section>

        <section className="education">
          <h3>Education</h3>
          <div className="degree">
            <h4>{data2.institutename}</h4>
            <h3>{data2.course}</h3>
            <p>{data2.institutestate}</p>
            <p>{data2.country}</p>
            <p>{data2.institutestart} {data2.institutefinish}</p>
          </div>
        </section>
      </div>
    </div>
        <div>
        <button className='downloadbutton' onClick={downloadPDF}>Download</button>
      </div>
      </>
  );
}

export default CV2;
