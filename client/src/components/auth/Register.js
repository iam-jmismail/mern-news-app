import React, { Fragment } from "react";

export default function Register() {
  return (
    <Fragment>
      <section className='register py-4'>
        <div className='container'>
          <h3 className='text-primary'>Register </h3>
          <p className='lead'>
            <i className='fas fa-user mr-2'></i>Create New Account
          </p>
          <form className='form'>
            Name :
            <div className='row'>
              <div className='col-md-6 form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Mohamed'
                  name='fname'
                />
              </div>
              <div className='col-md-6 form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Ismail'
                  name='lname'
                />
              </div>
            </div>
            <div className='form-group'>
              <label> Username : </label>
              <input
                type='text'
                className='form-control'
                placeholder='jmismail'
                name='username'
              />
            </div>
            <div className='form-group'>
              <label> Email : </label>
              <input
                type='email'
                className='form-control'
                placeholder='jmismail628@gmail.com'
                name='email'
              />
            </div>
            <div className='form-group'>
              <label> City : </label>
              <input
                type='text'
                className='form-control'
                placeholder='Chennai'
                name='city'
              />
            </div>
            <div className='form-group'>
              <label> Country : </label>
              <input
                type='text'
                className='form-control'
                placeholder='India'
                name='country'
              />
            </div>
            <button className='btn btn-primary'>Sign Up</button>
            <p className='mt-2'>
              Already have an account <a href='./login'> Login </a> here.
            </p>
          </form>
        </div>
      </section>
    </Fragment>
  );
}
