import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID

// apiKey: "AIzaSyDTda4mikOAmMyX4tgdAGV0oNRK8m5Skuk",
// authDomain: "doctor-portal-b0e19.firebaseapp.com",
// projectId: "doctor-portal-b0e19",
// storageBucket: "doctor-portal-b0e19.appspot.com",
// messagingSenderId: "221856762107",
// appId: "1:221856762107:web:b7634af9537e836b6c885e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;