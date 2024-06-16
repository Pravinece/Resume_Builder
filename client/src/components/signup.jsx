import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import './signup.css'

const SignUpComponent = ({ onLoginClick }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  // const [id, setId]=();


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URI}/register`, { name, email, password })
      .then(prop => {console.log(prop)
        console.log(prop.data._id);
        // setId=prop.data._id;
        navigate(`/signin/${prop.data._id}`)
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className='body1'>
    <div className='sign-up-container'>
    <div className='sign-up-box'>
      <h1><strong>Sign Up</strong></h1>
      <form onSubmit={handleSubmit} >
        <div className='form-group'>
          <input
          className="input_box"
            type="text"
            placeholder="Username"
            name="username"
            value={name}
            autoComplete='off'
            onChange={(e) => setName(e.target.value)}
            required
          />

        </div>
        <div className='form-group'>
          <input
          className="input_box"
          autoComplete='off'
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <input
          className="input_box"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='btn'>Register</button>
      </form>
      <div className='sign-up-link'>
      <Link to="/" onClick={onLoginClick}>Already have an account? Sign in</Link>
    </div>
    </div>
    </div>
    </div>
  );
};

export default SignUpComponent;
