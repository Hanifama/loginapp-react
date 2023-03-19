// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import { FaApple } from "react-icons/fa";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDy_5TtqjuxOaEaYm7CVa7r4Xrk8Ru146A",
  authDomain: "ivantory.firebaseapp.com",
  projectId: "ivantory",
  storageBucket: "ivantory.appspot.com",
  messagingSenderId: "44207756341",
  appId: "1:44207756341:web:762dede4c3be7213484d7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;

