import React from 'react'

const Private = (props) => {
    const {user} = props;
    return (
        <div>
            <span className='d-block'>
            This is your account information. Only visible to you.
          </span>
          <span className='d-block'>
          Note: Changes to your email and password will change the information you use to login
          </span>
          <div className='mt-4'>Email Address</div>
          <div className='mt-2'>{user.email}</div>
          <div className='mt-2'>Password</div>
          <div className='mt-2'>**********</div>
        </div>
    )
}

export default Private
