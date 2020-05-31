import React from 'react';
import { useState } from 'react';

const Signup = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setUser({
          ...user, 
          [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
    };

    return (
        <div className='container w-25 mt-3'>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input className='form-control mt-2' type='text' name='username' placeholder='username' onChange={handleChange} value={user.username}/>
                    <input className='form-control mt-2' type='password' name='password' placeholder='password' onChange={handleChange} value={user.password}/>
                    <button className='btn btn-primary mt-2'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default Signup
