import React from "react";
import Login from "./Login";
import { useSelector, useDispatch } from "react-redux";

const Account = (props) => {
  const user = useSelector((state) => state.user);
  console.log(user)
  return (
    <div>
      <div>Account</div>
      {/* If not logged in, "user" in the store will be an empty object */}
      {JSON.stringify(user) === "{}" ? (
        props.history.push("/login")
      ) : (
        <div className='container text-center mt-5  '>
          
          <span className='d-block'>Profile Avatar</span>
          <img src={user.avatar} alt="avatar" style={{width:'128px' ,height:'128px'}}/>
          <span className='d-block'>Username</span>
          <h2>{user.username}</h2>
          <span>Manage My Created Groups</span>
          <h1>MY GROUPS</h1>
          <span>View Joined Groups</span>
          <h1>JOINED GROUPS</h1>
          <span>Edit Account</span>
        </div>
      )}
    </div>
  );
};

export default Account;
