// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDONa--SrVHqX6w91EeCkUiXv6sQSb0fZI",
  authDomain: "sistema-agua-potable-80a5f.firebaseapp.com",
  projectId: "sistema-agua-potable-80a5f",
  storageBucket: "sistema-agua-potable-80a5f.firebasestorage.app",
  messagingSenderId: "892035205401",
  appId: "1:892035205401:web:449ca15ec0ef81627a9d88",
  measurementId: "G-VP1PMJNEG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);