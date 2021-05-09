import React, { useEffect, useState } from "react";
import { Redirect, withRouter } from "react-router";
import {
  Button,
  TextField,
  Container,
  Paper,
  Box,
  Grid,
  IconButton,
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import firebase from "../firebase/config";
import { useStyles } from "./UseStyle";

const Create = props => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [cover, setCover] = useState("");
  const [isBusy, setIsBusy] = useState(false);
  const [routeRedirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState("");
  const [toggle, setToggle] = useState(false);

  // use style
  const classes = useStyles();

  // shop data input
  const shopTemplate = { name: "", description: "", images: [] };
  const [shop, setShop] = useState([]);
  // Mall and Shop Submit data
  const addPost = async e => {
    e.preventDefault();
    setIsBusy(true);

    // Mall data object
    let d;
    let post = {
      title,
      content,
      cover: cover[0],
    };

    // Mall Image upload
    const storageRef = firebase.storage.ref();
    const storageChild = storageRef.child(post.cover.name);
    const postCover = storageChild.put(post.cover);

    await new Promise(resolve => {
      postCover.on(
        "state_changed",
        snapshot => {
          let progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setLoading(Math.trunc(progress));
        },
        error => {
          //error
          console.log(error);
        },
        async () => {
          //completed
          const downloadURL = await storageChild.getDownloadURL();
          d = downloadURL;
          resolve();
        }
      );
    });

    // shop images

    await Promise.all(
      shop.map((data, i) =>
        Promise.all(
          data.images.map((img, i) => firebase.storage.ref(img.name).put(img))
        )
      )
    );

    const url = await Promise.all(
      shop.map((data, i) =>
        Promise.all(
          data.images.map((fImages, i) =>
            firebase.storage.ref(fImages.name).getDownloadURL()
          )
        )
      )
    );
    console.log("url", url);

    // Firebase Storing Data
    firebase
      .createPost(d, post, shop)
      .then(post => {
        setIsBusy(false);
        setRedirect(true);
      })
      .catch(err => {
        console.log(err);
        setIsBusy(false);
      });
  };

  // add more button of shop
  const addMore = () => {
    setShop([...shop, shopTemplate]);
  };

  // Delete Shop input
  const deleteButton = index => {
    let shopData = [...shop];
    shopData.splice(index, 1);
    setShop(shopData);
  };

  // use effect to check if user is authneticated
  useEffect(() => {
    firebase.getUserState().then(user => {
      if (!user) {
        props.history.replace("/login");
      }
    });
  });

  // Handle Change of Shop Input
  const handleChange = (index, e) => {
    let data = shop.map((shop, i) =>
      i == index
        ? Object.assign(shop, { [e.target.name]: e.target.value })
        : shop
    );
    setShop(data);
  };

  // Image Change
  const imageChange = (index, e) => {
    let data = shop.map((shop, i) =>
      i == index ? Object.assign(shop, { images: [e.target.files] }) : shop
    );
    setShop(data);
  };

  console.log("dfsdjhfdsjfh", shop);
  // Shop Form
  const shopField = (
    <>
      <Container>
        <Paper component={Box} p={1}>
          {shop.map((d, index) => {
            return (
              <Grid container spacing={2} key={index}>
                <Grid item md={4}>
                  <TextField
                    variant="outlined"
                    label="Enter Name"
                    name="name"
                    onChange={e => handleChange(index, e)}
                  />
                </Grid>
                <Grid item md={4}>
                  <TextField
                    color="primary"
                    variant="outlined"
                    label="Enter Description"
                    name="description"
                    onChange={e => handleChange(index, e)}
                  />
                </Grid>
                <Grid item md={3}>
                  <Button variant="contained" component="label">
                    File
                    <input
                      multiple
                      type="file"
                      alt="upload images"
                      onChange={e => imageChange(index, e)}
                    />
                  </Button>
                </Grid>

                <Grid item md={1}>
                  <IconButton
                    color="secondary"
                    onClick={index => deleteButton(index)}
                  >
                    <DeleteForeverIcon />
                  </IconButton>
                </Grid>
              </Grid>
            );
          })}
        </Paper>
        <Button
          className="addMore"
          color="secondary"
          variant="contained"
          onClick={addMore}
        >
          Add More
        </Button>
      </Container>
    </>
  );

  // Redire to home if not success
  const redirect = routeRedirect;
  if (redirect) {
    return <Redirect to="/" />;
  }

  // Form of Mall
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
      <>
        <form onSubmit={addPost}>
          <p>Create a new post</p>

          <label htmlFor="title">Post Title: </label>
          <input
            type="text"
            name="title"
            required
            onChange={e => setTitle(e.target.value)}
          />

          <label htmlFor="content">Post Content: </label>
          <textarea
            name="content"
            required
            onChange={e => setContent(e.target.value)}
          ></textarea>

          <label htmlFor="cover" className="cover">
            Cover
          </label>
          <input type="file" onChange={e => setCover(e.target.files)} />
          <div>
            <IconButton
              className={classes.button}
              onClick={() => setToggle(true)}
            >
              Add Shop
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
          <div>{toggle && shopField}</div>
          <input className="createBtn" type="submit" value="create post" />
        </form>
      </>
    );
  }

  return (
    <>
      {createForm}
      {console.log("setshop", shop)}
    </>
  );
};

export default withRouter(Create);
