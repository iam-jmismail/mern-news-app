import React, { Fragment } from "react";

export default function Login() {
  return (
    <Fragment>
      <section class='login py-4'>
        <div class='container'>
          <h3 class='text-primary'>Login </h3>
          <p class='lead'>
            <i class='fas fa-user mr-2'></i>SignIn into your account
          </p>
          <form class='form'>
            <div class='form-group'>
              <label> Email : </label>
              <input type='email' class='form-control' name='email' />
            </div>

            <div class='form-group'>
              <label> Password : </label>
              <input type='password' class='form-control' name='password' />
            </div>

            <button class='btn btn-primary btn'>Log In</button>
            <p class='mt-2'>
              Don't have account <a href='./register'> Create One </a>
              here.
            </p>
          </form>
        </div>
      </section>
    </Fragment>
  );
}
