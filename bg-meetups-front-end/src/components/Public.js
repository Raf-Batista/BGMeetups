import React from 'react'

const Public = (props) => {
    const {user} = props;
    return (
        <div>
            <span className='d-block'>Profile Avatar</span>
          <img src={user.avatar} alt="avatar" style={{width:'128px', height:'128px'}}/>
          <span className='d-block'>Username</span>
          <h2>{user.username}</h2>
          <span>Manage My Created Groups</span>
          <h1>MY GROUPS</h1>
          <span>View Joined Groups</span>
          <h1>JOINED GROUPS</h1>
        </div>
    )
}

export default Public
