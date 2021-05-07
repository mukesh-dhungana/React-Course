import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Posts } from "../context/postsContext";
import Firebase from "../firebase/config";
import "../index.css";

const Main = () => {
  const { state, dispatch } = React.useContext(Posts);

  const getPosts = async () => {
    const postsArray = await Firebase.getPosts().catch(err => {
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
    <div className="posts">
      <p>
        {state.posts.map(doc => {
          return (
            <div className="post" key={doc.id}>
              <Link to={"post/" + doc.id}>
                <div
                  style={{ backgroundImage: "url(" + doc.data.image + ")" }}
                ></div>
              </Link>
            </div>
          );
        })}
      </p>
      {console.log("main", state)}
    </div>
  );
};

export default Main;
