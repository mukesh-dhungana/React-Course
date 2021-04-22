import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDaj1-_NpYv91QrzFGRhExpCaE2XSNL2bw",
  authDomain: "react-photo-gallery-ce9d7.firebaseapp.com",
  projectId: "react-photo-gallery-ce9d7",
  storageBucket: "react-photo-gallery-ce9d7.appspot.com",
  messagingSenderId: "848826091068",
  appId: "1:848826091068:web:9d203fbfdc60a9fde9e539",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timestamp };
