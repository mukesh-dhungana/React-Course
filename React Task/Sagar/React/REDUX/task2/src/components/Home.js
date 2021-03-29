import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [apiValue, setApiValue] = useState([]);
  console.log("home", props);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://www.randomuser.me/api");
      const data = await response.json();
      setApiValue(data.results);
    }

    fetchData();
  }, []);

  useEffect(() => {
    props.showDataHandler(apiValue);
  }, [apiValue]);

  console.log("props", props.data);
  return (
    <div>
      <Link to="/profile">
        <button>Go To Profile</button>
      </Link>
    </div>
  );
};

export default Home;
