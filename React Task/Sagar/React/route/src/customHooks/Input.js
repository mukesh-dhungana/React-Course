import React from "react";
import useInput from "./useInput";

const Input = () => {
  const [firstname, bindFirstName, resetFirstName] = useInput("");
  const [lastname, bindLastName, resetLastName] = useInput("");

  const onSubmitHandler = () => {
    alert(`${firstname} ${lastname}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <form onSubmit={() => onSubmitHandler()}>
      <div>
        <label htmlFor="fname">Firstname</label>
        <input type="text" name="fname" {...bindFirstName} />
      </div>
      <div>
        <label htmlFor="lname">Lastname</label>
        <input type="text" name="lname" {...bindLastName} />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Input;
