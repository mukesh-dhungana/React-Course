import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase/config";
import "../index.css";

import { Posts } from "../context/postsContext";

const ShowAll = () => {
  const { state, dispatch } = React.useContext(Posts);

  const getPosts = async () => {
    //let _posts = [];
    const postsArray = await firebase.getPosts().catch(err => {
      console.log(err);
      return err;
    });

    return dispatch({
      type: "FETCH_POSTS",
      payload: postsArray,
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <React.Fragment>
      <h1 style={{ marginLeft: "40%" }}>All Malls</h1>
      <div className="posts">
        {state.posts.map(post => {
          return (
            <div className="post" key={post.id}>
              <Link to={"post/" + post.id}>
                <div
                  style={{ backgroundImage: "url(" + post.data.cover + ")" }}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default ShowAll;
