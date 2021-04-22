import React from "react";
import './Styles/Toogle.css'

const ToogleMode = ({toggleMe}) => {
  return (
    <>
      <label class="switch" >
        <input type="checkbox" onClick={()=>toggleMe()}/>
        <span class="slider round"></span>
      </label>
    </>
  );
};

export default ToogleMode;
