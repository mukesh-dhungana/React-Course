import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setData(data);
    }

    fetchAPI();
  }, []);

  return (
    <div>
      {data.map((user) => (
        <Link
          style={{ textDecoration: "none" }}
          className="postLink"
          key={user.id}
          to={"/posts/" + user.id}
        >
          <p className="p">{user.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
