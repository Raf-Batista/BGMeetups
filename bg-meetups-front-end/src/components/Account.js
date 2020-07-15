import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons'

 
const Account = (props) => {
  const user = useSelector((state) => state.user);  

  const [active, setActive] = useState(true);
  
  useEffect(() => {
    if(JSON.stringify(user) === "{}") props.history.push("/login");
  })

  const handleClick = () => {
    setActive(!active)
  }

  const privateProfile = <div>
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
  const publicProfile = <div>
    <span className='d-block'>Profile Avatar</span>
          <img src={user.avatar} alt="avatar" style={{width:'128px', height:'128px'}}/>
          <span className='d-block'>Username</span>
          <h2>{user.username}</h2>
          <span>Manage My Created Groups</span>
          <h1>MY GROUPS</h1>
          <span>View Joined Groups</span>
          <h1>JOINED GROUPS</h1>
  </div>
 
  return (
   
        <div className='container text-center mt-5'>
          <div className='heading'>
          <h2 className='d-block my-3'>Account Management</h2>
          <span>Update and manage your BGMeetups account</span>
          </div>

          <ul class="nav justify-content-center my-4">
            <li class="nav-item">
              <div className={`nav-link pointer ${active ? "active" : ''}`} onClick={handleClick}>Account</div>
            </li>
            <li class="nav-item">
              <span className={`nav-link pointer ${!active ? "active" : ''}`} onClick={handleClick}>Public Profile</span>
            </li>
          </ul>

          {active ? privateProfile : publicProfile}
          
          <span>Edit Account</span>
        </div>
  );
};

export default Account;
