import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from 'axios'
import { EditableText } from '@blueprintjs/core';
import './home.css'
import addprofile from '../images/addprofile.jpg';

export default function ViewProfile(){
    const {id} = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser]=useState([]);
    // const [phone, setPhone] = useState(1);

 
    
    useEffect(() => {
      axios.get(`http://localhost:3001/user/${id}`)
      .then(prop=>{setUser(prop.data)
        console.log(prop.data)
        setPhone(prop.data.phone);
      })
      .catch(err=>{console.log(err)})
    },[id])
      const [file, setFile] = useState(addprofile);
      function handleChange(e) {
          // console.log(e.target.files);
          // console.log(URL.createObjectURL(e.target.files[0]));
          setFile(URL.createObjectURL(e.target.files[0]));
      }

      const update=(e)=>{   
        e.preventDefault();       
      axios.put(`http://localhost:3001/user/${id}`,{phone})
      .then(prop=>{
        console.log(prop.data)
        setUser(prop.data);
        // setPhone(prop.data.phone);
        // setUser((users)=>{
        //         users.map(users =>{
        //           return user._id==ids ?{...user,[key]:value }:user;
        //       })
        //      })  
      })
      .catch(err=>{console.log(err)})
      }



    return(
    <>
    <div className="overall">
    <div className="container">
    <div className="image-section">

            <h2>Profile</h2>
            <input type="file"  onChange={handleChange}/>
            <img height={200} width={200} border={2}  src={file} />
        </div>
        <div className="details-section">
    <form onSubmit={update}>
    <table>
        <tbody>
      <tr>
        <th>Name</th>
        <td>{user.name} </td>
      </tr>

      <tr>
        <th>Email</th>
        <th> {user.email}</th>
      </tr>
      <tr>
        <th>Password</th>
        <td>{user.password}</td>
      </tr>
      </tbody>
    </table>
    </form>
    </div>
    </div>
    </div>
      </>
      )
    }