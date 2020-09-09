import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import Dropdown from "react-dropdown";
import { signUp } from "../../actions/Auth";
import Errors from "../ui/Errors";

function Register() {
  const dispatch = useDispatch();

  const [options, setOptions] = useState([]);

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    city: "",
    country: "",
    pincode: "",
  });

  const onChange = (value, name) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(formData));
  };

  const onPinCodeChange = async (pincode) => {
    console.log(pincode);

    const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
    const data = await res.json();

    console.log(data);

    if (data) {
      // const postOffices = data[0].PostOffice
      // setOptions(postOffices)
    }
  };
  return (
    <Fragment>
      <section className='register py-4'>
        <div className='container'>
          <h3 className='text-primary'>Register </h3>
          <p className='lead'>
            <i className='fas fa-user mr-2'></i>Create New Account
          </p>

          <Errors />

          <form className='form' method='POST' onSubmit={onSubmit}>
            Name :
            <div className='row'>
              <div className='col-md-6 form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Mohamed'
                  name='fname'
                  onChange={(e) => onChange(e.target.value, "fname")}
                />
              </div>
              <div className='col-md-6 form-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Ismail'
                  name='lname'
                  onChange={(e) => onChange(e.target.value, "lname")}
                />
              </div>
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
            <div className='form-group'>
              <label> Email : </label>
              <input
                type='email'
                className='form-control'
                placeholder='jmismail628@gmail.com'
                name='email'
                onChange={(e) => onChange(e.target.value, "email")}
              />
            </div>
            <div className='form-group'>
              <label> City : </label>
              <input
                type='text'
                className='form-control'
                placeholder='PIN CODE'
                name='pincode'
                onChange={(e) => onChange(e.target.value, "pincode")}
                onBlur={(e) => onPinCodeChange(e.target.value)}
              />
              {formData.pincode && (
                <Dropdown
                  // className='form-control'
                  // onChange={this._onSelect}
                  controlClassName='form-control'
                  options={options}
                  // value={}
                  placeholder='Select your post office'
                />
              )}
            </div>
            <div className='form-group'>
              <label> City : </label>
              <input
                type='text'
                className='form-control'
                placeholder='Chennai'
                name='city'
                onChange={(e) => onChange(e.target.value, "city")}
              />
            </div>
            <div className='form-group'>
              <label> Country : </label>
              <input
                type='text'
                className='form-control'
                placeholder='India'
                name='country'
                onChange={(e) => onChange(e.target.value, "country")}
              />
            </div>
            <button className='btn btn-primary' type='submit'>
              Sign Up
            </button>
            <p className='mt-2'>
              Already have an account <a href='./login'> Login </a> here.
            </p>
          </form>
        </div>
      </section>
    </Fragment>
  );
}

export default Register;
