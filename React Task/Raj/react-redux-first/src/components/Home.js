import React from "react";

function Home({ countData1, reactCount }) {
  document.title = countData1.length;
  return (
    <div>
      <h1>This is Home Page : {countData1.length}</h1>
      <button onClick={() => reactCount({ h1: "home page", name: "Raj" })}>
        Click
      </button>
    </div>
  );
}

export default Home;
