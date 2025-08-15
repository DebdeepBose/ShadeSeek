// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKWpdliFpQyQi8_BYEXMhYBeoVXQZnBxg",
  authDomain: "shadeseek-credentials.firebaseapp.com",
  projectId: "shadeseek-credentials",
  storageBucket: "shadeseek-credentials.firebasestorage.app",
  messagingSenderId: "536326436541",
  appId: "1:536326436541:web:00c4684de4495173c7a9d4",
  measurementId: "G-CWYL2YN4KS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const gProvider = new GoogleAuthProvider();