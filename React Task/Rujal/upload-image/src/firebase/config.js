import firebase from 'firebase/app'
import 'firebase/storage' //for storage
import  'firebase/firestore' //deals with database

var firebaseConfig = {
    apiKey: "AIzaSyB4ATD_lVA5lCS5l09JisBNIJ95v802Dpw",
    authDomain: "react-crud-f6987.firebaseapp.com",
    projectId: "react-crud-f6987",
    storageBucket: "react-crud-f6987.appspot.com",
    messagingSenderId: "425393810147",
    appId: "1:425393810147:web:9f04e8b7ba7c8f0902b3d6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const fireBaseStore = firebase.storage()
export const fireBaseDatabse = firebase.firestore()

