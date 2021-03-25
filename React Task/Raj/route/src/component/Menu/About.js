import React from "react";

function About(props) {
  return (
    <div>
      <h1
        style={{ textAlign: "center", color: "white", marginTop: "70px" }}
      >{`This is ${props.location.state} Page`}</h1>
    </div>
  );
}

export default About;
