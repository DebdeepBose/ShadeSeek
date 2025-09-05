
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
apiKey: "AIzaSyDWIsdwgmSPf1RkAduTzT8kpbjh80cvvtc",
  authDomain: "shadeseek-6e94a.firebaseapp.com",
  projectId: "shadeseek-6e94a",
  storageBucket: "shadeseek-6e94a.firebasestorage.app",
  messagingSenderId: "519333220915",
  appId: "1:519333220915:web:5016a73adba5457a7c8946",
  measurementId: "G-3Y46JBPH9N"
};


const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);