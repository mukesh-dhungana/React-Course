import { Component } from "react";
import "./Login.css";

import Users from "./Users";

class LoginClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      formCheck: {
        isName: false,
        isPass: false,
      },
      showError: false
    };
  }

  handleChange = e => {
    console.log("Change value", e.target.value.length);
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });

    if(this.state.showError) {
      if (e.target.name === 'password') {
        // console.log(this.state.userName.trim());
        if (e.target.value.length > 0) {
          // console.log(this.state.userName.trim());
          this.setState({
            formCheck: {
              isPass: true,
            },
          });
        } else {
          this.setState({
            formCheck: {
              isPass: false,
            },
          });
        }
      } else if (e.target.name === 'userName') {
        if (e.target.value.length > 0) {
          // console.log(this.state.userName.trim());
          this.setState({
            formCheck: {
              isName: true,
            },
          });
        } else {
          this.setState({
            formCheck: {
              isName: false,
            },
          });
        }
      }
    }
  
  };

  formSubmit = e => {
    e.preventDefault();

    if (!this.state.formCheck.isName || this.state.formCheck.isPass) {
      console.log("Please fill Name/Pass");
      this.setState({
        showError: true
      })
      return;
    }
    console.log("Form Submitted", this.props);
    console.log(Users);
    Users.map(user => {
      console.log("User", user);
      return this.state.userName === user.user_name ||
        this.state.userName === user.email
        ? this.state.password === user.password
          ? this.props.isLogin(true)
          : console.log("Password wrong")
        : console.log("MisMatch");
    });
  };

  render() {
    const { isName, isPass } = this.state.formCheck;

    return (
      <div className="login-container">
        <div className="header-w3l">
          <h1>Login Form</h1>
        </div>

        <div className="main-content-agile">
          <div className="sub-main-w3">
            <form action="#" method="" onSubmit={this.formSubmit}>
              <div className="input-name">
                <input
                  placeholder="Username or E-mail"
                  name="userName"
                  className="user"
                  type="text"
                  defaultValue={this.state.userName}
                  onInput={this.handleChange}
                />
                {this.state.showError && <p>Please Enter UserName or Email</p> }
              </div>
              <br />
              <div className="input-pass">
                <input
                  placeholder="Password"
                  name="password"
                  className="pass"
                  type="password"
                  defaultValue={this.state.password}
                  onInput={this.handleChange}
                />
                {this.state.showError && <p>Please Enter Password</p>}
              </div>
              <br />
              <input type="submit" value="" className="submit-btn" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginClass;
