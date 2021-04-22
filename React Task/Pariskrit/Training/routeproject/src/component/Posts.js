import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = React.useState([]);

  const getPosts = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    const data = await res.json();
    setPosts(data);
  };

  React.useEffect(() => {
    getPosts();
  }, []);

  if (!posts.length) {
    return <h1>Loading...</h1>;
  }
  return posts.map((post) => (
    <div>
      <Link to={{ pathname: "/posts/" + post.id, state: { id: post.id } }}>
        {post.title}
      </Link>
    </div>
  ));
}

export default Posts;
