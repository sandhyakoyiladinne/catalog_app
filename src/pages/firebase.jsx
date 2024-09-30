
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


// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   REACT_APP_FIREBASE_API_KEy = "AIzaSyCjgjuNRCN5X3J3cQpHjB8UKUgFe-j0jT4",
//   REACT_APP_FIREBASE_AUTH_DOMAIN= "movie-catlog-app.firebaseapp.com",
//   REACT_APP_FIREBASE_PROJECT_ID= "movie-catlog-app",
//   REACT_APP_FIREBASE_STORAGE_BUCKET="movie-catlog-app.appspot.com",
//   REACT_APP_FIREBASE_STORAGE_BUCKET= "266709371263",
//   REACT_APP_FIREBASE_APP_ID= "1:266709371263:web:f6b44f62302a94d4a4324a",
//   REACT_APP_FIREBASE_MEASUREMENT_ID= "G-P5P9CZTMWQ"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app); // Get the auth instance

// export { auth }; // Export the auth instance



