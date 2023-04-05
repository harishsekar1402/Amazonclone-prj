import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDWqx_FONT8OM3W7R4VWZbNl1sUIJo1W2Y",
  authDomain: "clone-16754.firebaseapp.com",
  projectId: "clone-16754",
  storageBucket: "clone-16754.appspot.com",
  messagingSenderId: "617780788986",
  appId: "1:617780788986:web:e9bd1687f125c8dfe29343",
  measurementId: "G-VJW2DLJNKF"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth};