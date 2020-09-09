import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const [profile, setProfile] = useState([]);
  const user = useSelector((state) => state.auth);

  useEffect(() => {
    setProfile(user);
  }, []);

  console.log(profile);

  return (
    <Fragment>
      <section className='container py-4'>
        <h2 className='text-primary'> Profile </h2>
      </section>
    </Fragment>
  );
}
