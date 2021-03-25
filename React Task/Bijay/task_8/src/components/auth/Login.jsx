import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import "./Login.css";
import Users from "./Users";

const Login = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const formSubmit = e => {
    e.preventDefault();
    if (!username) {
      console.log("Please fill");
      return;
    }
    console.log(Users);
    Users.map(user => {
      console.log("User", user);
       return username === user.user_name || username === user.email
        ? password === user.password
          ? setIsLogin(true)
          : console.log("Password wrong")
        : console.log("MisMatch");
    });
    
  };

  useEffect( () => {
    if(isLogin) {
        console.log('login', isLogin);
        
        return <Redirect to='/dashboard' />
    }
  }, [isLogin])

  return (
      
    <div className="login-container">
      <div className="header-w3l">
        <h1>Login Form</h1>
      </div>

      <div className="main-content-agile">
        <div className="sub-main-w3">
          <form action="#" method="" onSubmit={formSubmit}>
            <input
              placeholder="Username or E-mail"
              name="Name"
              className="user"
              type="text"
              defaultValue={username}
              onInput={e => setUsername(e.target.value)}
            />
            <br />
            <input
              placeholder="Password"
              name="Password"
              className="pass"
              type="password"
              defaultValue={password}
              onInput={e => setPassword(e.target.value)}
            />
            <br />
            <input type="submit" value="" className="submit-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
