import React from "react";

function Home(props) {
  return (
    <div>
      <h2>Welcome to home page</h2>
      <button onClick={() => props.history.push("/profile")}>
        View Profile
      </button>
    </div>
  );
}

export default Home;
