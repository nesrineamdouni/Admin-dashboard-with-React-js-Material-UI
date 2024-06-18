// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; // Décommentez cette ligne
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPulRfi9Mv1ZosK7Q950EI68KBinHVlBk",
  authDomain: "react-firebase-a4a13.firebaseapp.com",
  projectId: "react-firebase-a4a13",
  storageBucket: "react-firebase-a4a13.appspot.com",
  messagingSenderId: "340651509913",
  appId: "1:340651509913:web:0a7a10580f541a0adc9008",
  measurementId: "G-KTVNXGR0HQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Ajout de cette ligne
export const db = getFirestore(app);
