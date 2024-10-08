
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjgjuNRCN5X3J3cQpHjB8UKUgFe-j0jT4",
  authDomain: "movie-catlog-app.firebaseapp.com",
  projectId: "movie-catlog-app",
  storageBucket: "movie-catlog-app.appspot.com",
  messagingSenderId: "266709371263",
  appId: "1:266709371263:web:f6b44f62302a94d4a4324a",
  measurementId: "G-P5P9CZTMWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Get the auth instance

export { auth }; // Export the auth instance