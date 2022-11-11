import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyACY_EyaeIwhX3lJM9EJbXGmCnfXFpp1MY",
  authDomain: "plataformacursos-8ef7e.firebaseapp.com",
  projectId: "plataformacursos-8ef7e",
  storageBucket: "plataformacursos-8ef7e.appspot.com",
  messagingSenderId: "63466078808",
  appId: "1:63466078808:web:aa94f76d24feed3d5d802d",
  measurementId: "G-M6VCPWG5HN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);