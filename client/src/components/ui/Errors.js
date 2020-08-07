import React from "react";
import { useSelector } from "react-redux";
import { Alert } from "reactstrap";

const Errors = () => {
  const errors = useSelector((state) => state.errors);
  if (errors && errors.length > 0) {
    const errorArray = errors.map((error, index) => (
      <Alert key={index} color='danger'>
        {error.msg}
      </Alert>
    ));
    return <>{errorArray}</>;
  } else return null;
};

export default Errors;
