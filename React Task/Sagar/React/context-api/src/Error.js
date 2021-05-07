import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      URL doesn't exist. <Link to="/">Go to HOMEPAGE</Link>
    </div>
  );
};

export default Error;
