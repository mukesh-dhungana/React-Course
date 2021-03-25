import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);

  const username = "admin";
  const password = "admin";

  const history = useHistory();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (user === username && pass === password) {
      history.push("/home");
      props.setIsAuth(true);
      console.log(props);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <form action="" onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUser(e.target.value)}
          value={user}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
          value={pass}
        />
        <input type="submit" value="Login" />
      </form>
      <div style={{ color: "red" }}>
        {error ? "Username or Password didn't match" : ""}
      </div>
    </div>
  );
};

export default Login;
