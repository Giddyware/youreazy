import { getApp, getApps, initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  setDoc,
  doc,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// TODO: Replace the following with .env.development
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVC8YfX2b1GghLzHC6zG5h5VZ_xhreyBI",
  authDomain: "youreasy-9147a.firebaseapp.com",
  databaseURL: "https://youreasy-9147a-default-rtdb.firebaseio.com",
  projectId: "youreasy-9147a",
  storageBucket: "youreasy-9147a.appspot.com",
  messagingSenderId: "425329372219",
  appId: "1:425329372219:web:ffaf57e3fe81f9498f801e",
  measurementId: "G-V2SY08C4BK",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, app, auth };

// console.log("showing");
