import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './signup.css';
import { Eye,EyeOff } from 'lucide-react';


const SignInComponent = ({ onRegisterClick }) => {
  const navigate = useNavigate();
  const {id}=useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const toggleShowPassword = () => setShowPassword(!showPassword);
  // const [ids,setIds]=('');
  var ids;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.BACKEND_URI}/signin`,{email, password})
      .then(prop => {
        console.log(prop.data);
        console.log(email);
        // console.log(id);
        if ((prop.data._id == id)||(prop.data.email==email)){
          ids=prop.data._id;
          navigate(`/home/${prop.data._id}`);
          localStorage.setItem('userId', prop.data._id);

        } else {
          alert("User Not Found "+ids);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(()=>{axios
    .get(`${process.env.BACKEND_URI}`)
    .then(response => {
      console.log(response.data)
    })
    .catch((error) => console.log(error));},[])


  // const handlehome=()=>{
  //    navigate(`/home/${ids}`)
  // }
console.log(ids);
  return (
    <div className='body1'>
    <div className='sign-up-container'>
    <div className='sign-up-box'>
          <h1><strong>Sign In</strong></h1>
          <form onSubmit={handleSubmit}>
          <div className='form-group'>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  autoComplete='off'
                  className="input_box"
                  placeholder="Enter email or username"
                /><br/><br/>
              <div className="form-group" style={{ paddingBottom: '20px' }}>
                <input
                  name="password"
                  className="input_box"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  placeholder="Password"
                />
                <div className="eye" onClick={toggleShowPassword}>
                  {showPassword ? <Eye/> : <EyeOff/>}
                </div>
              </div>
              <div className='sign-up-link'>
                <a href="#">Forgot Password</a>
              </div>
            </div>
            <div>
              {/* <button type="submit" onClick={handlehome}> */}
              <button type='submit' className='btn'>
                Login
              </button>
            </div>
              <div className='sign-up-link' >
              <Link to="/register" onClick={onRegisterClick}>I don't have an account Register here!</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
