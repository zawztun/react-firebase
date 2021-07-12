import firebase from "firebase";


const {REACT_APP_FIREBASE_IPAKEY} = process.env

  var firebaseApp = firebase.initializeApp({
    apiKey: REACT_APP_FIREBASE_IPAKEY,
    authDomain: "react-firebase-f1047.firebaseapp.com",
    projectId: "react-firebase-f1047",
    storageBucket: "react-firebase-f1047.appspot.com",
    messagingSenderId: "535931034511",
    appId: "1:535931034511:web:706e302d1415a61e7009fa"
  });
  // Initialize Firebase
  var db = firebaseApp.firestore();
export {db};
