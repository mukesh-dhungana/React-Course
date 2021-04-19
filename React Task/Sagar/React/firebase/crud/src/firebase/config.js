import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAOyzZDYzZMY9wU6aKtF45lxXGMD30amcY",
  authDomain: "crud-3acf9.firebaseapp.com",
  databaseURL: "https://crud-3acf9-default-rtdb.firebaseio.com",
  projectId: "crud-3acf9",
  storageBucket: "crud-3acf9.appspot.com",
  messagingSenderId: "375517306203",
  appId: "1:375517306203:web:3c8d33eb523e0ab2488e7e",
};
// Initialize Firebase
let fireDb = firebase.initializeApp(firebaseConfig);

 export default fireDb.database().ref();
