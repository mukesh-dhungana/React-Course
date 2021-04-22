import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <Link
        to={{
          pathname: "/about",
          state: { title: "ABOUT", description: "This is About" },
        }}
      >
        About
      </Link>
    </div>
  );
}

export default Home;
