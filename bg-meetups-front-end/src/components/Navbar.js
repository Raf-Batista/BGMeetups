import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import fetchLogout from '../async_actions/fetchLogout';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const loggedIn = useSelector(state => state.user);
  const dispatch = useDispatch();
  let history = useHistory();
  const handleClick = () => {
    dispatch(fetchLogout());
    history.push('/');
  }
  return (
    <div data-test="component-navbar">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="/" data-test="link-navbar">
          BG Meetups
        </a>
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
              <a className="nav-link" href="/groups" data-test="link-navbar">
                Groups
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/market" data-test="link-navbar">
                Market
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/account" data-test="link-navbar">
                Account
              </a>
            </li>
            {JSON.stringify(loggedIn) !== '{}' ? 
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleClick} data-test="link-navbar">
                Logout
              </a>
            </li> : null 
            }
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
