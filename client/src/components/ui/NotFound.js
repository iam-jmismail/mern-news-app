import React from "react";

function NotFound() {
  return (
    <div className='container py-4'>
      <h3 className='text-primary'>404 Error </h3>
      <p className='lead'>Page Not Found </p>

      <h4> Try the following pages</h4>
      <a href='/' className='btn btn-danger'>
        {" "}
        Home page{" "}
      </a>
    </div>
  );
}

export default NotFound;
