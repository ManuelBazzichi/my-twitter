// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDifUqIHLkb-5b2GddctSSwbbWhnrPEKO8",
  authDomain: "twitter-clone-45dcc.firebaseapp.com",
  projectId: "twitter-clone-45dcc",
  storageBucket: "twitter-clone-45dcc.appspot.com",
  messagingSenderId: "720980474013",
  appId: "1:720980474013:web:33463a8fe2ef3121effc74",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;
