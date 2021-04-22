import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: ""
  });

  const handleChange = (event) => {
    setUserInfo((prev) => ({
        ...prev,
        [event.target.name] : event.target.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInfo);
    event.target.reset();
  }

  return (
    <form className="form" onSubmit = {handleSubmit}>
      <label for="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        // value={userInfo.username}
        onChange={(event) => handleChange(event)}
      />

      <label for="password">Password:</label>
      <input
        type="text"
        id="password"
        name="password"
        // value={userInfo.password}
        onChange={(event) => handleChange(event)}
      />

      <input className="form__Submit" type="submit" value="Submit" />
    </form>
  );
}

export default LoginForm;
