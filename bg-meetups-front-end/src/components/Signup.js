import React from "react";
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Signup = () => {
  const [user, setUser] = useState({
      username: '',
      email: '', 
      password: '',
  });

  const handleChange = (e) => {
    setUser({
        ...user,
        [e.target.name]: e.target.value
    });
  }


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='container text-center mt-4 signin'>
      <h2>Sign in Below</h2>
      
      <div className='mt-4'>
        <button className=' btn btn-primary text-center'>
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            size='lg'
            className='mr-2'
          />
          <span>Facebook</span>
        </button>
      </div>
      <div className='mb-2'>
        <button className='btn btn-success text-center'>
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            size='lg'
            className='mr-2'
          />
          <span className=''>Twitter </span>
        </button>
      </div>
      <div className='mb-2'>
        <button className=' btn btn-warning text-center'>
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            size='lg'
            className='mr-2'
          />
          <span>Google</span>
        </button>
      </div>
    <p className='mt-4'>Or create an account using your email</p>
      <div className='d-flex justify-content-center mt-2'>
        <form onSubmit={handleSubmit} >
            <div className='form-group'>
                <input className='form-control' name='username' type='text' placeholder='username' onChange={handleChange} value={user.username}/>
                <input className='form-control' name='email' type='email' placeholder='email' onChange={handleChange} value={user.email}/>
                <input className='form-control' name='password' type='password' placeholder='password' onChange={handleChange} value={user.password}/>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
