// function Test(props) {
//   const element = React.createElement(
//     "h1",
//     { className: "greeting" },
//     "Hello, world!"
//   );
//   function getGreeting(user) {
//     if (user) {
//       return <h1>Hello, {user}!</h1>;
//     }
//     return <h1>Hello, Stranger.</h1>;
//   }

//   return (
//     <div>
//       This is test component
//       {element}
//       {getGreeting("Rajesh")}
//     </div>
//   );
// }

// export default Test;

import React, { Component } from "react";

class Test extends Component {
  value = "dsd";

  getGreeting(user) {
    if (user) {
      return <h1>Hello, {user}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }
  render() {
    return <div>{this.getGreeting("Rajesh")}</div>;
  }
}

export default Test;
