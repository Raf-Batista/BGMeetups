import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { NavLink , useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const loggedIn = useSelector(state => state.user);
  const dispatch = useDispatch();
  let history = useHistory();


  return (
    <div data-test="component-navbar">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <NavLink exact className="navbar-brand" to="/" data-test="link-navbar">
          BG Meetups
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mt-1" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/groups" data-test="link-navbar">
                Groups
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/market" data-test="link-navbar">
                Market
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
