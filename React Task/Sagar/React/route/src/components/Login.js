import React, { useState } from "react";
import Form from "./Form";
import LogoutForm from "./LogoutForm";

const Login = ({ isAuth, setIsAuth }) => {
  const [error, setError] = useState("");
  const username = "test";
  const password = "password";

  return (
    <div className="loginPage">
      <div className="errorDiv">
        {error ? <p style={{ color: "red" }}>{error}</p> : ""}
      </div>

      {isAuth == "true" ? (
        <LogoutForm setIsAuth={setIsAuth} isAuth={isAuth} />
      ) : (
        <div className="form">
          <Form
            setIsAuth={setIsAuth}
            un={username}
            pw={password}
            setError={setError}
          />
          {console.log(isAuth)}
        </div>
      )}
    </div>
  );
};

export default Login;
