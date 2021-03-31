import React from "react";
import './Error.css'
const ErrorBlock = props => {
  return (
    <div class="alert alert-info">
      <p class="mt-auto">
        {props.title} 
      </p>
    </div>
  );
};

export default ErrorBlock;
