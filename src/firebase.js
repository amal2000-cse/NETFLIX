// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5hI2shxowWO7K2TXwDHOmLZ6F3eyUvak",
  authDomain: "netflix-react-c2f79.firebaseapp.com",
  projectId: "netflix-react-c2f79",
  storageBucket: "netflix-react-c2f79.appspot.com",
  messagingSenderId: "234518207698",
  appId: "1:234518207698:web:2cce3fcf00eda61f44a10b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app);