import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDzWknZ6UL0BuD6ebiCqyXXs2V1XvlLDpM",
  authDomain: "image-gallery-da015.firebaseapp.com",
  projectId: "image-gallery-da015",
  storageBucket: "image-gallery-da015.appspot.com",
  messagingSenderId: "627446358007",
  appId: "1:627446358007:web:4499f1553906227e9f58f2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { projectFirestore, projectStorage, timestamp };
