import React from "react";

function About(props) {
  return (
    <div>
      <h1>{`This is ${props.location.state}`}</h1>
    </div>
  );
}

export default About;
