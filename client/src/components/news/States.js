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
                  <a href='/kerala'>Kerala</a>
                </div>
                <div className='list-group-item my-1'>
                  <a href='/tamilnadu'>Tamil Nadu</a>
                </div>
                <div className='list-group-item my-1'>
                  <a href='/telegana'>Telangana</a>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='list-group'>
                <div className='list-group-item my-1'>
                  <a href='/andhrapradesh'>Andhra Pradesh</a>
                </div>
                <div className='list-group-item my-1'>
                  <a href='/maharastra'>Maharastra </a>
                </div>
                <div className='list-group-item my-1'>
                  <a href='/karnataka'>Karnataka</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
