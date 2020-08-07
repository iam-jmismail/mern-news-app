import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../actions/Auth";
import Errors from "../ui/Errors";

export default function Login() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (value, name) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(formData));
  };

  return (
    <Fragment>
      <section className='login py-4'>
        <div className='container'>
          <h3 className='text-primary'>Login </h3>
          <p className='lead'>
            <i className='fas fa-user mr-2'></i>SignIn into your account
          </p>

          <Errors />

          <form className='form' method='POST' onSubmit={onSubmit}>
            <div className='form-group'>
              <label> Email : </label>
              <input
                type='email'
                className='form-control'
                name='email'
                onChange={(e) => onChange(e.target.value, "email")}
              />
            </div>

            <div className='form-group'>
              <label> Password : </label>
              <input
                type='password'
                className='form-control'
                name='password'
                onChange={(e) => onChange(e.target.value, "password")}
              />
            </div>

            <button className='btn btn-primary btn'>Log In</button>
            <p className='mt-2'>
              Don't have account <a href='./register'> Create One </a>
              here.
            </p>
          </form>
        </div>
      </section>
    </Fragment>
  );
}
