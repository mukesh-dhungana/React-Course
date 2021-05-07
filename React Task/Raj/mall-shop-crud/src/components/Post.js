import React, { useState, useEffect, useRef } from "react";
import { Redirect, useParams } from "react-router-dom";
import Firebase from "../firebase/config";

const Post = () => {
  const [timer, setTimer] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [userState, setUserState] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState("");
  console.log("state");

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const fileRef = useRef(null);

  //   const [postid, setPostId] = useState("");
  const [routeRedirect, setRedirect] = useState(false);
  const { id } = useParams();

  const getPost = async postId => {
    let _post = await Firebase.getPost(postId).catch(err => {
      console.log(err);
      return err;
    });
    setPost(_post);
  };

  useEffect(() => {
    console.log("effect");
    setTimer(true);
    getPost(id); // it load after the component render which means the post name in render should undefine and give error
    Firebase.getUserState().then(user => {
      if (user) {
        setUserState(user);
      }
    });
    setTimeout(() => {
      setTimer(false);
    }, 1000);
  }, [id]);

  if (routeRedirect) {
    return <Redirect to="/" />;
  }

  let currentPost;
  let editButton;
  let deleteButton;

  const updateCurrentPost = e => {
    e.preventDefault();
    setIsBusy(true);
    //update post

    let _post = {
      title: titleRef.current.value,
      content: contentRef.current.value,
    };
    if (fileRef.current.files.length > 0) {
      _post["image"] = fileRef.current.files[0];
      _post["oldImage"] = post.fileref;
    }
    Firebase.updataPost(id, _post)
      .then(() => {
        setIsBusy(false);
        setRedirect(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };
  const deleteCurrentPost = (e, postId, fileref) => {
    e.preventDefault();
    Firebase.deletePost(postId, fileref)
      .then(() => {
        setRedirect(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  let updateForm;
  if (editMode) {
    deleteButton = (
      <button
        className="delete"
        onClick={e => deleteCurrentPost(e, id, post.fileref)}
      >
        Delete
      </button>
    );
    if (isBusy) {
      updateForm = (
        <div className="processing">
          <p>Please Wait..</p>
          <div className="loader">Loading...</div>
        </div>
      );
    } else {
      updateForm = (
        <>
          <form className="editForm" onSubmit={updateCurrentPost}>
            <p>Update the current post</p>

            <label htmlFor="title">Post Title: </label>
            <input
              type="text"
              name="title"
              ref={titleRef}
              defaultValue={post.title}
            />

            <label htmlFor="content">Post Content: </label>
            <textarea
              name="content"
              ref={contentRef}
              defaultValue={post.content}
            ></textarea>

            <label htmlFor="cover" className="cover">
              image
            </label>
            <input type="file" ref={fileRef} />

            <input type="submit" value="update post" />
          </form>
          {deleteButton}
        </>
      );
    }
  }

  if (timer) {
    currentPost = (
      <div className="processing">
        <p>Loading Post</p>
        <div className="loader">Loading...</div>
      </div>
    );
  } else {
    if (userState) {
      editButton = (
        <button className="edit" onClick={e => toggleEditMode(e)}>
          Edit
        </button>
      );
    }
    currentPost = (
      <div className="single">
        <img src={post.image} alt="post cover" />
        <h2>{post.title}</h2>
        <div>{post.content}</div>
        {editButton}
        {updateForm}
      </div>
    );
  }

  return (
    <div>
      {currentPost} {console.log("render")}{" "}
    </div>
  );
};

export default Post;
