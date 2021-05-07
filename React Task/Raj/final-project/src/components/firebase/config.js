import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage"; // services to store images
import "firebase/firestore"; // services for database
// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: "AIzaSyAXZ4JIJali_YC0OXqaHiNWM9RP5Xh0Sz0",
  authDomain: "mall-shop-8fa4c.firebaseapp.com",
  projectId: "mall-shop-8fa4c",
  storageBucket: "mall-shop-8fa4c.appspot.com",
  messagingSenderId: "939579672645",
  appId: "1:939579672645:web:54672d988ae185f8453b2c",
});
export const db = firebase.firestore();
export const storage = firebase.storage();
export const firebaseAuth = firebase.auth();

// export const projectAuth = firebase.auth();
// export const projectFireStore = firebase.firestore();
// export const projectStorage = firebase.storage();
// export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
