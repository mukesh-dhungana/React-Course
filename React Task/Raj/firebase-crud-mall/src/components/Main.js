import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase/config";
import "../index.css";

import { Posts } from "../context/postsContext";

const Main = () => {
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
      <header>
        <div>{/* <h1>Home Page</h1> */}</div>
      </header>

      <div className="posts">
        {!state.posts.length ? (
          <div>
            <div className="">
              <h1>No data to display</h1>
            </div>
          </div>
        ) : (
          state.posts.slice(0, 3).map(post => {
            return (
              <div className="post" key={post.id}>
                <Link to={"post/" + post.id}>
                  <div
                    style={{ backgroundImage: "url(" + post.data.cover + ")" }}
                  />
                </Link>
              </div>
            );
          })
        )}
      </div>
      {state.posts.length && (
        <div>
          <Link to="/showall">
            <button className="viewall">View All</button>
          </Link>
        </div>
      )}
    </React.Fragment>
  );
};

export default Main;
