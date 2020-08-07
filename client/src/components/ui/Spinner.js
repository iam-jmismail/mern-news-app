import React from "react";
import ReactSpinner from "react-bootstrap-spinner";

function Spinner() {
  return (
    <div className='text-center pt-4 mt-4 mb-4 pb-4'>
      <ReactSpinner type='grow' color='warning' size='1' />
      <ReactSpinner type='grow' color='danger' size='1' />
      <ReactSpinner type='grow' color='dark' size='1' />
    </div>
  );
}

export default Spinner;
