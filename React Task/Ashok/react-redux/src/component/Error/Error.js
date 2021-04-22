import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h2>404 Not found</h2>

      <Link to="/home">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default Error;
