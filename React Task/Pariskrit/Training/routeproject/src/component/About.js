import React from "react";

function About(props) {
  const {
    state: { title, description },
  } = props.location;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default About;
