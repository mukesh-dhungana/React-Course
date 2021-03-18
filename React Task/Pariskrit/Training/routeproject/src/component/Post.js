import React from "react";

function Post(props) {
  const {
    state: { id },
  } = props.location;

  const [post, setPost] = React.useState({});

  React.useEffect(() => {
    const getPost = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await res.json();
      setPost(data);
    };
    getPost();
  }, [id]);

  if (!Object.keys(post).length) {
    return <h1>Loading...</h1>;
  }
  const { title, body } = post;
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}

export default Post;
