import React, { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <section class='section-a'>
        <div class='dark-overlay'>
          <div class='container py-4'>
            <h2 class='display-4 text-primary'> Breaking NEWS </h2>
            <p class='lead'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Praesentium repudiandae dicta eaque veritatis dolorem quo deserunt
              voluptatem itaque consequuntur temporibus sit, consectetur minus
              incidunt nesciunt obcaecati aliquid quia tempore. Asperiores!
            </p>
            <button class='btn btn-primary mr-1'>Login </button>
            <button class='btn btn-light'>Register </button>
          </div>
        </div>
      </section>
      <section className='section-b'>
        <div className='container'>
          <div className='row text-center'>
            <div className='col-md-4'>
              <i className='fas fa-shipping-fast'></i>
              <h3 className='text-primary'> Faster Update</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                distinctio asperiores
              </p>
            </div>
            <div className='col-md-4'>
              <i className='fas fa-fire'></i>
              <h3 className='text-primary'> Always Hotnews</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                distinctio asperiores
              </p>
            </div>
            <div className='col-md-4'>
              <i className='fas fa-newspaper'></i>
              <h3 className='text-primary'> First Of All</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                distinctio asperiores
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
