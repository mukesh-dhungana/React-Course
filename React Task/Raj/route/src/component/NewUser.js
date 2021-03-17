import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

function NewUser() {
  const [data, setData] = useState({});

  const { id } = useParams();
  const fetchData = id => {
    fetch(` https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(x => x.json())
      .then(data => setData(data));
  };
  useEffect(() => {
    fetchData(id);
  }, [data]);

  return (
    <div className="data">
      <h2>
        <span>ID : </span>
        {data.id}
      </h2>
      <h3>
        <span>Title : </span>
        {data.title}
      </h3>
    </div>
  );
}

export default NewUser;
