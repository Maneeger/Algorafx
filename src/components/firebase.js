// Before: import * as firebase from 'firebase'
// NOW: Only import the specific functions you need from their specific modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from 'firebase/firestore';  // Optional: For database (if you need it later)
// Don't forget any other services you use, like Firestore
// import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize the app with the modular function
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
// Get the service instances with the modular functions const auth = getAuth(app); 
// export const db = getFirestore(app);
const db = getFirestore(app);
// Optional: export the app itself if needed elsewhere
// We pull the value directly from the environment variable or the config object.
export const FIREBASE_APP_ID = import.meta.env.VITE_FIREBASE_APP_ID;
export { app, auth }; 
 