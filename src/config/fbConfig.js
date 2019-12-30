import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDre7KcDrHogWKKT2JuPnHpV9AaoVbu0xw",
  authDomain: "mario-plan-c9ac4.firebaseapp.com",
  databaseURL: "https://mario-plan-c9ac4.firebaseio.com",
  projectId: "mario-plan-c9ac4",
  storageBucket: "mario-plan-c9ac4.appspot.com",
  messagingSenderId: "795541424703",
  appId: "1:795541424703:web:3767dfed6b688c80bdc68a",
  measurementId: "G-P9CCLEPS0W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// change how firebase work with timestamp ** NEED THIS *** PER UPDATE
// firebase.firestore().settings({
//   timestampsInSnapshots: true
// });

export default firebase;
