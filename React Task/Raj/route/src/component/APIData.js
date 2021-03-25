import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function APIData(props) {
  const [state, setState] = useState([]);
  const [url] = useState(` https://jsonplaceholder.typicode.com/posts`);

  const fetchData = () => {
    return fetch(url)
      .then(data => data.json())
      .then(result => setState(result));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="link">
      {state.map((x, i) => {
        return (
          <>
            <Link key={i} to={{ pathname: `/user/${x.id}` }} className="box">
              <span>Title : </span>
              {x.title}
            </Link>
            <br></br>
          </>
        );
      })}
    </div>
  );
}

export default APIData;
