import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASAGfY_7A0OooyjczaR66J7B0wuUk-EFA",
  authDomain: "capstone3-2abad.firebaseapp.com",
  projectId: "capstone3-2abad",
  storageBucket: "capstone3-2abad.appspot.com",
  messagingSenderId: "987892391908",
  appId: "1:987892391908:web:233532e660334d78b4f1f1",
};

const app = firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();

export { app };
