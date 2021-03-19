import React, { useEffect, useState } from "react";

const PostDetail = (props) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + props.match.params.id
      );
      const data = await response.json();
      setUser(data);
      console.log(data);
    }

    fetchAPI();
  }, []);

  return (
    <div className="detailp">
      <p>{user.id}</p>
      <p>{user.title}</p>
    </div>
  );
};

export default PostDetail;
