import React, { useState } from 'react'

const Private = (props) => {
    const {user} = props;
    const [showEditForm, setShowEditForm] = useState(false);
    const [userForm, setUserForm] = useState({email: user.email, password: '********'})

    const handleClick = () => {
        setShowEditForm(!showEditForm)
    };

    const form = <form className='mt-4'>
        <div className='form-group'>
            <label className='d-block my-2'>Email Address</label>
            <input type='text' placeholder={userForm.email}/>
            <label className='d-block my-2'>Password</label>
            <input type='text' placeholder={userForm.password}/>
        </div>
    </form>

    const privateInfo = <div>
         <div className='mt-4'>Email Address</div>
          <div className='mt-2'>{user.email}</div>
          <div className='mt-2'>Password</div>
          <div className='mt-2'>**********</div>
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
          <div className='pointer' onClick={handleClick}>Edit</div>
        </div>
    )
}

export default Private
