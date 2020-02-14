import React, { Fragment } from "react";

export default function Search() {
  return (
    <Fragment>
      <section className='search'>
        <section className='jumbotron'>
          <h2 className='text-primary'>Deep Search</h2>
          <p className='lead'>
            Using Deep Search Find News between Two Periods
          </p>
          <form className='form'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='form-group'>
                  <input type='date' className='form-control' />
                </div>
              </div>
              <div className='col-md-4'>
                <div className='form-group'>
                  <input type='date' className='form-control' />
                </div>
              </div>

              <div className='col-md-4'>
                <div className='form-group'>
                  <button className='btn btn-primary btn-block'>Search</button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </section>
    </Fragment>
  );
}
