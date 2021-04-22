import React from "react";
import {Link, useRouteMatch} from 'react-router-dom'
const CheckComp = (props) => {
   
    const {url} = useRouteMatch()
  return (
    <div>
      <Link to={`${url}/username`} >
        <div className="alert alert-primary change" role="alert">
          Change Username
        </div>
      </Link>
      <Link to={`${url}/email`}>
        <div className="alert alert-primary change" role="alert">
          Change Primary Email
        </div>
      </Link>
      <Link to={`${url}/changepassword`}>
        <div className="alert alert-primary change" role="alert">
          Change Password
        </div>
      </Link>
    </div>
  );
};

export default CheckComp;
