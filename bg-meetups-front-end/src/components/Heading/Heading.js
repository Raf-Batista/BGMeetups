import React, { useState } from 'react'
import dice from '../../assets/images/dice.svg';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import fetchLogout from '../../async/fetchLogout';
import './Heading.scss';


const Heading = () => {
  const [open, setOpen] = useState(false);

  const currentUser = useSelector((state) => state.user);


  const handleClick = () => {
    setOpen(!open)
  }

  const dispatch = useDispatch();
  let history = useHistory();
  const logout = () => {
    dispatch(fetchLogout());
    setOpen(!open)
    history.push('/');
  }

  const loginNav = <ul><li onClick={handleClick}>
    <NavLink
      exact
      className="nav-link"
      to="/login"
      data-test="link-navbar">
      Login
                      </NavLink>
  </li>
    <li onClick={handleClick}>
      <NavLink
        exact
        className="nav-link"
        to="/signup"
        data-test="link-navbar">
        Signup
                      </NavLink>
    </li>
  </ul>
  return (
    <>
    HEADING!!
    </>
  )
//   return (
//     <div className='logo'>
//       <div className='d-inline'>
//         {/* <img src={dice} /> */}
//       </div>

//       <div className='d-inline'>
//         <small className='logo-name'>BoardGame Meetups</small>
//       </div>

//       <div className='d-inline pointer' onClick={handleClick} >
//         <span className='user-account-text'>Account</span>

//         {/* <FontAwesomeIcon
//           icon={faUser}
//           size="lg"
//           className='user-account-icon'
//         /> */}
//       </div>

//       <div className='sidenav' style={open ? { width: '250px' } : { width: '0' }}>
//         <a href="#" className="closebtn" onClick={handleClick} >&times;</a>
//         {
//           JSON.stringify(currentUser) === "{}" ?
//             loginNav :
//             <ul>
//               <li onClick={handleClick}>
//                 <NavLink
//                   exact
//                   className="nav-link"
//                   to="/account"
//                   data-test="link-navbar">
//                   Account
//                           </NavLink>
//               </li>

//               <li onClick={handleClick}>
//                 <NavLink
//                   exact
//                   className="nav-link"
//                   to="/my-market"
//                   data-test="link-navbar">
//                   My Market
//                           </NavLink>
//               </li>

//               <li onClick={handleClick}>
//                 <NavLink
//                   exact
//                   className="nav-link"
//                   to={`/${currentUser.id}/groups`}
//                   data-test="link-navbar">
//                   My Groups
//                           </NavLink>
//               </li>

//               <li onClick={handleClick}>
//                 <NavLink
//                   exact
//                   className="nav-link"
//                   to="/messages"
//                   data-test="link-navbar">
//                   Messages
//                           </NavLink>
//               </li>

//               <li onClick={handleClick}>
//                 <NavLink
//                   exact
//                   className="nav-link"
//                   to="/invites"
//                   data-test="link-navbar">
//                   Invites
//                           </NavLink>
//               </li>

//               <li onClick={logout}>
//                 <NavLink
//                   exact
//                   className="nav-link"
//                   to="/logout"
//                   data-test="link-navbar">
//                   Logout
//                           </NavLink>
//               </li>
//             </ul>
//         }
//         <li onClick={handleClick}>

//         </li>
//       </div>
//     </div>
//   )
// }
}
export default Heading
