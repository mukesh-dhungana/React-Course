import React, { useEffect, useState } from "react";
import { Redirect, withRouter } from "react-router";
import Firebase from "../firebase/config";

const Create = props => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [isBusy, setIsBusy] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    setIsBusy(true);

    let post = {
      title,
      content,
      image: image[0],
    };
    await Firebase.createPost(post)
      .then(() => {
        console.log("post created");
        setRedirect(true);
        setIsBusy(true);
      })
      .catch(err => {
        console.log(err);
        setIsBusy(false);
      });
  };
  useEffect(() => {
    Firebase.getUserState().then(user => {
      if (!user) {
        props.history.replace("/login");
        alert("Access Denied. Admin resource. Please Login");
      }
    });
  }, []);

  if (redirect) {
    return <Redirect to="/" />;
  }
  let createForm;
  if (isBusy) {
    createForm = (
      <div className="processing">
        <p>
          Request is being processed <span className="process">{loading}%</span>
        </p>
        <div className="loader">Loading...</div>
      </div>
    );
  } else {
    createForm = (
      <form onSubmit={handleSubmit}>
        <p>Create a new Malls</p>

        <label htmlFor="title">Mall Name: </label>
        <input
          type="text"
          name="title"
          onChange={e => setTitle(e.target.value)}
        />

        <label htmlFor="content">Post Content: </label>
        <textarea
          name="content"
          onChange={e => setContent(e.target.value)}
        ></textarea>

        <label htmlFor="cover" className="cover">
          Image
        </label>
        <input type="file" onChange={e => setImage(e.target.files)} />

        <input type="submit" value="create Mall" />
      </form>
    );
  }

  return <>{createForm}</>;
};

export default withRouter(Create);
