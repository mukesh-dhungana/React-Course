import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage"; // services to store images
import "firebase/firestore"; // services for database
// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyAXZ4JIJali_YC0OXqaHiNWM9RP5Xh0Sz0",
  authDomain: "mall-shop-8fa4c.firebaseapp.com",
  projectId: "mall-shop-8fa4c",
  storageBucket: "mall-shop-8fa4c.appspot.com",
  messagingSenderId: "939579672645",
  appId: "1:939579672645:web:54672d988ae185f8453b2c",
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }
  loginUser = async (email, password) => {
    let user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        console.log(err);
        return err;
      });
    return user;
  };
  signinUser = async (email, password) => {
    let user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        console.log("errorsss", err);
        return err;
      });
    console.log("config", user);
    return user;
  };
  logout = async () => {
    let logout = await firebase
      .auth()
      .signOut()
      .catch(err => {
        console.log(err);
        return err;
      });
    return logout;
  };
  async getUserState() {
    return await new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  // get all mall data
  getPosts = async () => {
    const postData = [];
    const posts = await firebase.firestore().collection("malls").get();
    console.log("get data", posts);
    posts.forEach(doc => {
      postData.push({ id: doc.id, data: doc.data() });
    });
    console.log("post data", postData);
    return postData;
  };

  // get individual mall data
  getPost = async postId => {
    const postData = await firebase
      .firestore()
      .collection("malls")
      .doc(postId)
      .get();
    return postData.data();
  };
  // creating mall
  createPost = async post => {
    const storageRef = firebase.storage().ref();
    const storageChild = storageRef.child(post.image.name);
    const postImage = await storageChild.put(post.image); // upload the image
    const downloadImage = await storageChild.getDownloadURL(); // download image
    const fileRef = postImage.ref._delegate._location.path_;

    let newPost = {
      title: post.title,
      content: post.content,
      image: downloadImage,
      fileref: fileRef,
    };
    const firestorePost = firebase
      .firestore()
      .collection("malls")
      .add(newPost)
      .catch(err => {
        console.error(err);
        return err;
      });
    return firestorePost;
  };
  updataPost = async (postId, postData) => {
    if (postData["image"]) {
      // if we have file with data
      const storageRef = firebase.storage().ref();
      const storageChild = storageRef.child(postData.image.name);
      const postImage = await storageChild.put(postData.image); // upload the image
      const downloadImage = await storageChild.getDownloadURL(); // download image
      const fileRef = postImage.ref._delegate._location.path_;
      await storageRef
        .child(postData["oldImage"])
        .delete()
        .catch(err => {
          console.log(err);
        });
      let updataPost = {
        title: postData.title,
        content: postData.content,
        image: downloadImage,
        fileref: fileRef,
      };

      let post = await firebase
        .firestore()
        .collection("malls")
        .doc(postId)
        .set(updataPost, { merge: true })
        .catch(err => {
          return err;
        }); // merge true will look which change and make it change only that
      return post;
    } else {
      let post = await firebase
        .firestore()
        .collection("malls")
        .doc(postId)
        .set(postData, { merge: true })
        .catch(err => {
          console.log(err);
          return err;
        });
      return post;
    }
  };
  deletePost = async (postId, fileref) => {
    let storageRef = firebase.storage().ref();
    await storageRef
      .child(fileref)
      .delete()
      .catch(err => {
        console.log("Deleted from Storage");
      });
    let post = await firebase
      .firestore()
      .collection("malls")
      .doc(postId)
      .delete()
      .catch(err => {
        console.log(err);
      });
    console.log("Post deleted");
    return post;
  };
}
export default new Firebase();

// export const db = firebase.firestore();
// export const storage = firebase.storage();
// export const auth = firebase.auth();

// export const projectAuth = firebase.auth();
// export const projectFireStore = firebase.firestore();
// export const projectStorage = firebase.storage();
// export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
