import React, { Fragment } from "react";

export default function National() {
  return (
    <Fragment>
      <section className='section-national py-4'>
        <div className='container'>
          <h3 className='text-dark'>
            <i className='fas fa-globe-asia mr-2'></i> National
          </h3>

          <div className='card my-1'>
            <div className='card-body'>
              <h3 className='text-dark'>
                House GOP members introduce resolution to condemn Pelosi for
                ripping up Trump's speech - CNN
              </h3>
              <small>2020-02-06T04:22:00Z</small>
              <p className='card-text'>
                House Republicans plan to introduce a disapproval resolution
                condemning House Speaker Nancy Pelosi for ripping up her copy of
                President Donald Trump's State of the Union speech.
                <span className='badge badge-primary ml-4'>CNN</span>
              </p>

              <button className='btn btn-primary'>More</button>
              <button className='btn btn-light'>Show Less Like This</button>
              <button className='btn btn-danger'>Favorite </button>
            </div>
          </div>

          <div className='card my-2'>
            <div className='card-body'>
              <h3 className='text-dark'>
                Piers Morgan Hates and Loves On Shakira and Jennifer Lopez's
                Super Bowl Performances - Showbiz Cheat Sheet
              </h3>
              <small>2020-02-06T04:22:00Z</small>
              <p className='card-text'>
                Piers Morgan had some critical thoughts about the Super Bowl
                halftime show.
                <span className='badge badge-primary ml-4'>Cheatsheet.com</span>
              </p>

              <button className='btn btn-primary'>More</button>
              <button className='btn btn-light'>Show Less Like This</button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
