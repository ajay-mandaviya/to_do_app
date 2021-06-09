import firebase from 'firebase'
// import firebase from "firebase/app";
import "firebase/auth";
var firebaseConfig = {
    apiKey: "AIzaSyCNvYhJE1fn72w3rDaNk6wJID0sNGOBmhk",
    authDomain: "to-do-app-8605e.firebaseapp.com",
    projectId: "to-do-app-8605e",
    storageBucket: "to-do-app-8605e.appspot.com",
    messagingSenderId: "1065404714222",
    appId: "1:1065404714222:web:c3762c684f13c47ebb37ff"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();
  export { db  , auth };
