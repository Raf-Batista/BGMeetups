import React from "react";

const Navbar = () => {
  return (
    <div data-test="component-navbar">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="/" data-test="link-navbar">
          BG Meetups
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse mt-1" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/groups" data-test="link-navbar">
                Groups
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/market" data-test="link-navbar">
                Market
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/account" data-test="link-navbar">
                Account
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
