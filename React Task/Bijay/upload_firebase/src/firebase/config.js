import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyC48SLI5yBWWfasrAaQs1TuW3-HfqecfQc",
    authDomain: "firegram-react-82ea3.firebaseapp.com",
    projectId: "firegram-react-82ea3",
    storageBucket: "firegram-react-82ea3.appspot.com",
    messagingSenderId: "584605175161",
    appId: "1:584605175161:web:a05392231372f43fdfb3a8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFireStore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectStorage, projectFireStore, timestamp}