import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage"; // services to store images
import "firebase/firestore"; // services for database

var app = firebase.initializeApp({
  apiKey: "AIzaSyC3pi8JLOHonpkj1dns-gryjeiXkDsw2mY",
  authDomain: "react-crud-dc3a0.firebaseapp.com",
  projectId: "react-crud-dc3a0",
  storageBucket: "react-crud-dc3a0.appspot.com",
  messagingSenderId: "73851981546",
  appId: "1:73851981546:web:ce4933bad6f2e30a14d193",
});

export const projectAuth = firebase.auth();
export const projectFireStore = firebase.firestore();
export const projectStorage = firebase.storage();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export default app;

//   // createing users
//   firebaseSignin = async (email, password) => {
//     const createUser = await firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .catch(err => console.log(err));
//     return createUser;
//   };

//   // signin users
//   firebaseLoginin = async (email, password) => {
//     const loginUser = await firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .catch(err => console.log(err));
//     return loginUser;
//   };

//   //logout user
//   firebaseLogout = async () => {
//     let logoutUser = await firebase
//       .auth()
//       .signOut()
//       .catch(err => console.log(err));
//     return logoutUser;
//   };
// }
