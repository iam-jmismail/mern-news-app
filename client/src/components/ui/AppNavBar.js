import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../actions/Auth";
import { getFavorites } from "../../actions/Favorites";
export default function AppNavBar() {
  let favorites = [];
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  favorites = useSelector((state) => state.favorite.favorites);
  const profile = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  const logoutUser = () => {
    dispatch(signOut());
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          The Indian Times
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href='./nation'>
                National
              </a>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                States
              </a>
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <a className='dropdown-item' href='/kerala'>
                  Kerala
                </a>
                <a className='dropdown-item' href='/tamilnadu'>
                  Tamil Nadu
                </a>
                <a className='dropdown-item' href='/karnataka'>
                  Karnataka
                </a>
                <a className='dropdown-item' href='/telegana'>
                  Telangana
                </a>
                <a className='dropdown-item' href='/andhrapradesh'>
                  AndhraPradesh
                </a>
                <div className='dropdown-divider'></div>
                <a className='dropdown-item' href='/maharastra'>
                  Maharastra
                </a>
              </div>
            </li>

            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Categories
              </a>
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <a className='dropdown-item' href='/buisness'>
                  Buisness
                </a>
                <a className='dropdown-item' href='/entertainment'>
                  Entertainment
                </a>
                <a className='dropdown-item' href='/general'>
                  General
                </a>
                <a className='dropdown-item' href='/health'>
                  Health
                </a>
                <a className='dropdown-item' href='/science'>
                  Science
                </a>
                <div className='dropdown-divider'></div>
                <a className='dropdown-item' href='/category'>
                  More
                </a>
              </div>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='./weather'>
                Weather
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='./search'>
                Deep Search
              </a>
            </li>
          </ul>

          {isAuthenticated ? (
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <a href='/favorites' className='nav-link'>
                  Favorites{" "}
                  {favorites.length > 0 ? (
                    <span className='badge badge-danger'>
                      {favorites.length}
                    </span>
                  ) : null}
                </a>
              </li>
              <li className='nav-item'></li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  {profile && profile.profile && (
                    <Fragment>
                      {profile.profile.firstName +
                        " " +
                        profile.profile.lastName}
                    </Fragment>
                  )}
                </a>
                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <a className='dropdown-item' href='/profile'>
                    Profile
                  </a>
                  <a href='/' className='dropdown-item' onClick={logoutUser}>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          ) : (
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <a href='./login' className='nav-link'>
                  Login
                </a>
              </li>
              <li className='nav-item'>
                <a href='./register' className='nav-link'>
                  Register
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
