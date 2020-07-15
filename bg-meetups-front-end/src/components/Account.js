import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Private from './Private';
import Public from './Public';

 
const Account = (props) => {
  const user = useSelector((state) => state.user);  

  const [active, setActive] = useState(true);
  
  useEffect(() => {
    if(JSON.stringify(user) === "{}") props.history.push("/login");
  })

  const handleClick = () => {
    setActive(!active)
  }
 
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

          {active ? <Private user={user} /> : <Public user={user} />}
        </div>
  );
};

export default Account;
