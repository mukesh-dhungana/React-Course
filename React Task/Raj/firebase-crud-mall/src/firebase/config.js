import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
  //firebase config
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
    this.storage = firebase.storage();
    this.timestamp = firebase.firestore.FieldValue.serverTimestamp;
  }

  timestamp = firebase.firestore.FieldValue.serverTimestamp;
  //login
  async login(email, password) {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        console.log(err);
        return err;
      });
    return user;
  }

  //signin
  async signin(email, password) {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        console.log(err);
        return err;
      });
    return user;
  }

  //logout
  async logout() {
    const logout = await firebase
      .auth()
      .signOut()
      .catch(err => {
        console.log(err);
        return err;
      });
    return logout;
  }

  async getUserState() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  async getPosts() {
    let postsArray = [];
    const posts = await firebase.firestore().collection("malls").get();
    posts.forEach(doc => {
      postsArray.push({ id: doc.id, data: doc.data() });
    });
    return postsArray;
  }

  async getPost(postid) {
    const post = await firebase
      .firestore()
      .collection("malls")
      .doc(postid)
      .get();
    const postData = post.data();
    return postData;
  }

  async createPost(url, post, user) {
    const fileRef = await firebase.storage().refFromURL(url);

    let newPost = {
      title: post.title,
      content: post.content,
      cover: url,
      shop: user,
      // fileref: fileRef,
      fileref: fileRef._delegate._location.path_,
    };

    const firestorePost = await firebase
      .firestore()
      .collection("malls")
      .doc(post.title)
      .set(newPost, { merge: true })
      .catch(err => {
        console.log(err);
      });

    return firestorePost;
  }

  async updatePost(url, postid, postData) {
    if (postData["cover"]) {
      const fileRef = await firebase.storage().refFromURL(url);

      await this.storage
        .ref()
        .child(postData["oldcover"])
        .delete()
        .catch(err => {
          console.log(err);
        });

      let updatedPost = {
        title: postData.title,
        content: postData.content,
        cover: url,
        fileref: fileRef._delegate._location.path_,
      };

      const post = await firebase
        .firestore()
        .collection("malls")
        .doc(postid)
        .set(updatedPost, { merge: true })
        .catch(err => {
          console.log(err);
        });
      return post;
    } else {
      const post = await firebase
        .firestore()
        .collection("malls")
        .doc(postid)
        .set(postData, { merge: true })
        .catch(err => {
          console.log(err);
        });
      return post;
    }
  }

  async deletePost(postid, fileref) {
    const storageRef = firebase.storage().ref();
    await storageRef
      .child(fileref)
      .delete()
      .catch(err => {
        console.log(err);
      });
    console.log("Image Deleted");
    const post = await firebase
      .firestore()
      .collection("malls")
      .doc(postid)
      .delete()
      .catch(err => {
        console.log(err);
      });
    console.log("Post Deleted");

    return post;
  }
}

export default new Firebase();
