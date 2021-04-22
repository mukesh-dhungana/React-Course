import { Component } from "react";
import "./Login.css";

import Users from "./Users";

class LoginClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName:{
        value:"",
        focused:false
      },
      password:{
        value:"",
        focused:false,
      },
      formCheck: {
        isName: false,
        isPass: false,
      },
      showError: false,
    };
  }

  handleFocus=(e)=>{
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({
      [name]:{...this.state[name], focused:true},
    });
    if(name==="password" && this.state.userName.focused && this.state.userName.value.length===0){
      console.log("provide username first");
      this.setState({
        showError: true
      })
      setTimeout(()=> {
        this.setState({
          showError: false
        })
      }, 3000)
    }
  }

  handleChange = e => {
    console.log("Change value", e.target.value.length);
    const { name, value } = e.target;
    console.log(name, value);
   

    this.setState({
      [name]:{...this.state[name], focused:true, value:value},
    });


    //**** ERROR HANDLING */
    if (this.state.showError) {
      if (e.target.name === "password") {
        if(this.state.userName.focused){
          console.log("Please enter username first");
        }else{
          if (e.target.value.length > 0) {
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
        }
       
      } else if (e.target.name === "userName") {
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

    if (!this.state.userName.value || !this.state.password.value) {
      console.log("Please fill Name/Pass");
      this.setState({
        showError: true,
      });
      setTimeout(()=> {
        this.setState({
          showError: false
        })
      }, 6000)
      return;
    }
    console.log("Form Submitted", this.props);
    console.log(Users);
    Users.map(user => {
      console.log("User", user);
      return this.state.userName.value === user.user_name ||
      this.state.userName.value === user.email
        ? this.state.password.value === user.password
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
                  defaultValue={this.state.userName.value}
                  onInput={this.handleChange}
                  onFocus = {this.handleFocus}
                />
                {this.state.showError && <p>Please Enter UserName or Email</p>}
              </div>
              <br />
              <div className="input-pass">
                <input
                  placeholder="Password"
                  name="password"
                  className="pass"
                  type="password"
                  defaultValue={this.state.password.value}
                  onInput={this.handleChange}
                  onFocus = {this.handleFocus}

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
