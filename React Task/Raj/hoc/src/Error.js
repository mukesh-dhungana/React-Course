import React from "react";
import { Link } from "react-router-dom";

function Error(props) {
  return (
    <div>
      <h1>
        404 Page Not Found.{" "}
        <Link to="/" className="btn btn-danger">
          Back to Home Page
        </Link>
      </h1>
    </div>
  );
}

export default Error;
