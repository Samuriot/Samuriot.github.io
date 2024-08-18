// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import {getAuth, signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBqIaxO18Y2eJQ6xbmu9SDfdKaZKGP1qwk",
  authDomain: "portfolio-40627.firebaseapp.com",
  projectId: "portfolio-40627",
  storageBucket: "portfolio-40627.appspot.com",
  messagingSenderId: "632177130872",
  appId: "1:632177130872:web:2be5f8eb4853531fd4dc8d",
  measurementId: "G-2JX6K3DLHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
const analytics = getAnalytics(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);