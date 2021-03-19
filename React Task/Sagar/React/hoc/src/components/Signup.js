import React from "react";
import Hoc from "../hoc/Hoc";

const Signup = () => {
  return (
    <div>
      <label htmlFor="name">Input Text 2</label>
      <input type="text" name="name" />
    </div>
  );
};

export default Hoc(Signup);
