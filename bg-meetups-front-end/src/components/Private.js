import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchEditUser from '../async_actions/fetchEditUser.js';

const Private = (props) => {
    const {history, user} = props
    const [showEditForm, setShowEditForm] = useState(false);
    const [userForm, setUserForm] = useState({email: '', password: '', id: user.id});
    const dispatch = useDispatch();
    

    const handleClick = () => {
        setShowEditForm(!showEditForm)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchEditUser(userForm));
        setUserForm({...userForm, email: '', password: ''}); 
        setShowEditForm(!showEditForm)
    };

    const handleChange = (e) => {
        setUserForm({
            ...userForm,
            [e.target.name]: e.target.value
        });
    };

    const form = <form className='mt-4 mx-lg-auto ml-sm-4' onSubmit={handleSubmit}>
        <div className='form-group'>
            <label className='d-block my-2'>Email Address</label>
            <input name='email' onChange={handleChange} type='email' placeholder={user.email} value={userForm.email} />
            <label className='d-block my-2'>Password</label>
            <input name='password' onChange={handleChange} type='password' placeholder={'*******'} value={userForm.password} />
            <div>
              <button className='pointer d-inline mx-2 mt-2 border-0 bg-transparent' type='submit'>Save</button>
              <button className='pointer d-inline border-0 bg-transparent' onClick={handleClick}>Cancel</button>
            </div>
        </div>
    </form>

    const privateInfo = <div>
      <div className='mt-4'>Email Address</div>
      <div className='mt-2'>{user.email}</div>
      <div className='mt-2'>Password</div>
      <div className='mt-2'>**********</div>
      <button className='pointer border-0 bg-transparent' onClick={handleClick}>Edit</button>
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
          <div className='my-2'>Manage My Created Groups</div>
          <div>Manage My Marketplace</div>
        </div>
    )
}

export default Private
