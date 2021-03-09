// import React, { Component } from "react";
// import "./css/nav.css";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import Detail from "./Detail";

// class App extends Component {
//   state = {
//     id: "home",
//     array: [
//       { Id: 1, Name: "Nabil_Bank" },
//       { Id: 2, Name: "Nepal_Investment_Bank" },
//       { Id: 3, Name: "Global_IME" },
//       { Id: 4, Name: "NIC_ASIA" },
//       { Id: 5, Name: "PRABHU" },
//     ],
//   };

//   focusRef = React.createRef();

//   componentDidMount() {
//     this.focusRef.current.focus();
//   }

//   render() {
//     return (
//       <>
//         <div className="Nav">
//           <nav>
//             <h2
//               className="logo"
//               onClick={() => {
//                 this.setState({ id: "home" });
//               }}
//             >
//               LOGO
//             </h2>
//             <ul activeClassName="active">
//               <li>
//                 <a
//                   href="#home"
//                   ref={this.focusRef}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     this.setState({ id: "home" });
//                   }}
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#about"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     this.setState({ id: "about" });
//                   }}
//                 >
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#contact"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     this.setState({ id: "contact" });
//                   }}
//                 >
//                   Contact
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#detail"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     this.setState({ id: "detail" });
//                   }}
//                 >
//                   Detail
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>

//         <div className="body">
//           {this.state.id === "home" ? <Home /> : ""}
//           {this.state.id === "about" ? <About /> : ""}
//           {this.state.id === "contact" ? <Contact /> : ""}
//           {this.state.id === "detail" ? <Detail list={this.state.array} /> : ""}
//         </div>
//       </>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import "./css/nav.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Detail from "./Detail";
import Form from "./Form";
import Form2 from "./Form/Form2";

const style = {
  background: "white",
  color: "black",
};

class App extends Component {
  state = {
    id: "home",
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
    { id: "about", child: "About" },
    { id: "contact", child: "Contact" },
    { id: "details", child: "Details" },
    { id: "form", child: "Form" },
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
          {this.state.id === "about" ? <About /> : ""}
          {this.state.id === "contact" ? <Contact /> : ""}
          {this.state.id === "details" ? (
            <Detail list={this.state.array} />
          ) : (
            ""
          )}
          {this.state.id === "form" ? <Form /> : ""}
          {this.state.id === "form2" ? <Form2 /> : ""}
        </div>
      </>
    );
  }
}

export default App;
