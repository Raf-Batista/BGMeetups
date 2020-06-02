import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class='navbar navbar-expand-lg navbar-dark'>
        <a class='navbar-brand' href='/'>
          BG
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>

        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav mr-auto'>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Groups
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Market
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Account
              </a>
            </li>
          </ul>
          <form class='form-inline my-2 my-lg-0'>
            <input
              class='form-control form-control-sm mr-sm-2 w-50-sm'
              type='email'
              placeholder='email'
              aria-label='Search'
            />
            <input
              class='form-control form-control-sm mr-sm-2 w-50-sm'
              type='text'
              placeholder='password'
              aria-label='Search'
            />
            <button class='btn btn-outline-success' type='submit'>
              Login
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
