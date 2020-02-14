import React from "react";

export default function AppNavBar() {
  return (
    <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div class='container'>
        <a class='navbar-brand' href='/'>
          The Indian Times
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNav'>
          <ul class='navbar-nav'>
            <li class='nav-item'>
              <a class='nav-link' href='./nation'>
                National
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='./states'>
                States
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='./cat'>
                Categories
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='./weather'>
                Weather
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='./search'>
                Deep Search
              </a>
            </li>
          </ul>
          <ul class='navbar-nav ml-auto'>
            <li class='nav-item'>
              <a href='./login' class='nav-link'>
                Login
              </a>
            </li>
            <li class='nav-item'>
              <a href='./register' class='nav-link'>
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
