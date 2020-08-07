import React from "react";

export default function Footer() {
  return (
    <footer className='bg-dark text-light'>
      <div className='footer-start bg-primary'>
        <div className='container py-2 d-flex justify-content-center'>
          <a href='#'>
            <span className='fa fa-facebook-square'></span>
          </a>
          <a href='#'>
            <span className='fa fa-twitter-square'></span>
          </a>
          <a href='#'>
            <span className='fa fa-reddit-square'></span>
          </a>
        </div>
      </div>
      <div className='footer-content container py-4'>
        <div className='row'>
          <div className='col-md-6 d-flex flex-column justify-content-center'>
            <h1>About Us</h1>
            <p>
              The India Times is a new portal that brings you reliable news from
              divergent new sources. We rely on worlds popular news API to
              ensure faster delivery of content. Our website gives you news from
              all parts of the global. Addition to that our website serves you
              real time weather updates based on your location.
            </p>

            <hr />
            <h1>Our Partners</h1>
            <ul>
              <li>
                <a href='https://openweathermap.org/api'>Open Weather Map</a>
              </li>
              <li>
                <a href='https://newsapi.org/'>News API</a>
              </li>
            </ul>
          </div>
          <div className='col-md-6'>
            <h1>Write to us</h1>
            <form method='POST'>
              <div className='form-group'>
                <label htmlFor='email'>E-mail</label>
                <input
                  type='email'
                  placeholder='example@domain.com'
                  className='form-control'
                  name='email'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='message'>Message</label>
                <textarea
                  name='message'
                  cols='30'
                  rows='3'
                  className='form-control'
                ></textarea>
              </div>
              <button className='btn btn-primary'>Send</button>
            </form>
          </div>
        </div>
      </div>

      <div className='footer-end text-center py-3'>
        &copy; All Rights Reserved
      </div>
    </footer>
  );
}
