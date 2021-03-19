import "./css/nav.css";
import Home from "./Home";
import Todo from "./todo/Todo";
import Detail from "./Detail";
import Form2 from "./Form/Form2";
import Search from "./Search/Search";
import Contact from "./Contact/Contact";
import React, { Component } from "react";

const style = {
  background: "white",
  color: "black",
};

class App extends Component {
  state = {
    id: "todo",
    array: [
      { Id: 1, Name: "Nabil_Bank" },
      { Id: 2, Name: "Nepal_Investment_Bank" },
      { Id: 3, Name: "Global_IME" },
      { Id: 4, Name: "NIC_ASIA" },
      { Id: 5, Name: "PRABHU" },
    ],
  };

  navList = [
    { id: "home", child: "Home" },
    { id: "todo", child: "Todo" },
    { id: "contact", child: "Contact" },
    { id: "details", child: "Details" },
    { id: "search", child: "Search" },
    { id: "form2", child: "Form2" },
  ];

  render() {
    return (
      <>
        <div className="Nav">
          <nav>
            <h2
              className="logo"
              onClick={() => {
                this.setState({ id: "home" });
              }}
            >
              LOGO
            </h2>
            <ul>
              {this.navList.map((x) => {
                return (
                  <li key={x.id}>
                    <a
                      style={x.id === this.state.id ? style : null}
                      href={x.id}
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ id: x.id });
                      }}
                    >
                      {x.child}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="body">
          {this.state.id === "home" ? <Home /> : ""}
          {this.state.id === "todo" ? <Todo /> : ""}
          {this.state.id === "contact" ? <Contact /> : ""}
          {this.state.id === "details" ? (
            <Detail list={this.state.array} />
          ) : (
            ""
          )}
          {this.state.id === "search" ? <Search /> : ""}
          {this.state.id === "form2" ? <Form2 /> : ""}
        </div>
      </>
    );
  }
}

export default App;
