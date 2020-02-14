import React, { Fragment } from "react";

export default function States() {
  return (
    <Fragment>
      <section className='states py-4'>
        <div className='container'>
          <h3 className='text-dark'>
            <i className='fas fa-chess mr-2'> </i>States
          </h3>
          <div className='row text-center'>
            <div className='col-md-6'>
              <div className='list-group'>
                <div className='list-group-item my-1'>
                  <a href='#'>Kerala</a>
                </div>
                <div className='list-group-item my-1'>
                  <a href='#'>Tamil Nadu</a>
                </div>
                <div className='list-group-item my-1'>
                  <a href='#'>Andhra Pradesh</a>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='list-group'>
                <div className='list-group-item my-1'>
                  <a href='#'>Goa</a>
                </div>
                <div className='list-group-item my-1'>
                  <a href='#'>Odhisa </a>
                </div>
                <div className='list-group-item my-1'>
                  <a href='#'>Maharastra</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
