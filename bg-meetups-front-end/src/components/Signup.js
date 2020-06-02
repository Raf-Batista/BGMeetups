import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    // send e.target.innerText to server for OAuth
    console.log(e.target.innerText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser();
  };

  const createUser = async () => {
    const fetchResponse = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = fetchResponse.json();
    console.log(data);
  };

  return (
    <div className='container text-center mt-4 signin'>
      <h2>Sign in Below</h2>

      <div className='mt-4'>
        <button
          className=' btn text-center'
          name='facebook'
          onClick={handleClick}
        >
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            size='lg'
            className='mr-2'
          />
          <span className='mr-2'>Facebook</span>
        </button>
      </div>
      <div className='my-2'>
        <button className='btn  text-center' onSubmit={handleSubmit}>
          <FontAwesomeIcon
            icon={["fab", "twitter"]}
            size='lg'
            className='mr-2'
          />
          <span className='mr-4'>Twitter</span>
        </button>
      </div>
      <div className='mb-3'>
        <button className=' btn text-center'>
          <FontAwesomeIcon
            icon={["fab", "google"]}
            size='lg'
            className='mr-2'
          />
          <span className='mr-4'>Google</span>
        </button>
      </div>
      <small>Or create an account using your email</small>
      <div className='d-flex justify-content-center mt-3'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              className='form-control'
              name='username'
              type='text'
              placeholder='username'
              onChange={handleChange}
              value={user.username}
            />
            <input
              className='form-control  mt-2'
              name='email'
              type='email'
              placeholder='email'
              onChange={handleChange}
              value={user.email}
            />
            <input
              className='form-control  mt-2'
              name='password'
              type='password'
              placeholder='password'
              onChange={handleChange}
              value={user.password}
            />
            <button className='btn mt-2' type='submit'>
              Create Account
            </button>
            <small>
              Already have an account? <a href='#'>Login</a>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
