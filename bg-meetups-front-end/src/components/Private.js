import React, { useState } from 'react'

const Private = (props) => {
    const {user} = props;
    const [showEditForm, setShowEditForm] = useState(false);
    const [userForm, setUserForm] = useState({email: user.email, password: '********'})

    const handleClick = () => {
        setShowEditForm(!showEditForm)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setUserForm({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const form = <form className='mt-4' onSubmit={handleSubmit}>
        <div className='form-group'>
            <label className='d-block my-2'>Email Address</label>
            <input name='email' onChange={handleChange} type='text' placeholder={userForm.email} required/>
            <label className='d-block my-2'>Password</label>
            <input name='password' onChange={handleChange} type='text' placeholder={userForm.password} required/>
            <div>
              <button className='pointer d-inline mx-2 mt-2 border-0 bg-transparent' type='submit'>Save</button>
              <div className='pointer d-inline' onClick={handleClick}>Cancel</div>
            </div>
        </div>
    </form>

    const privateInfo = <div>
      <div className='mt-4'>Email Address</div>
      <div className='mt-2'>{user.email}</div>
      <div className='mt-2'>Password</div>
      <div className='mt-2'>**********</div>
      <div className='pointer' onClick={handleClick}>Edit</div>
    </div>

    return (
        <div>
          <span className='d-block'>
            This is your account information. Only visible to you.
          </span>
          <span className='d-block'>
          Note: Changes to your email and password will change the information you use to login
          </span>
          {showEditForm ? form : privateInfo}
        </div>
    )
}

export default Private
