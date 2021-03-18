import React, { useEffect, useState } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";

const PostDetail = (props) => {
  const [user, setUser] = useState("");

  const history = useHistory();
  const location = useLocation();

  const { id } = useParams();

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch(
        // "https://jsonplaceholder.typicode.com/posts/" + props.match.params.id
        "https://jsonplaceholder.typicode.com/posts/" + id
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
      <button
        className="backBtn"
        onClick={() => (
          history.goBack(),
          console.log(history.location.pathname),
          console.log(location.pathname)
        )}
      >
        Back
      </button>
      {location.pathname === "/posts/2" ? (
        <button className="backBtn">Clickme</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default PostDetail;
