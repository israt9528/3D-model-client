// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD33eoTGo7NBHJ-IO7veM-7nKIrNdxcZo0",
  authDomain: "d-model-project-62051.firebaseapp.com",
  projectId: "d-model-project-62051",
  storageBucket: "d-model-project-62051.firebasestorage.app",
  messagingSenderId: "930306771855",
  appId: "1:930306771855:web:e98c946db90f1586a519fa",
  measurementId: "G-WJ9M91GE0J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
