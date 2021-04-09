import React from "react";
import './Error.css'
const ErrorBlock = ({title}) => {
  return (
    <div class="alert alert-warning error-alert">
      <p class="">
        {title} 
      </p>
    </div>
  );
};

export default ErrorBlock;
