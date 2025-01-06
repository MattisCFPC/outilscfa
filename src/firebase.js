// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqdOL6wJAk6VFz5r9-IZiRAIYAlD3sUFY",
  authDomain: "landingpage-66842.firebaseapp.com",
  projectId: "landingpage-66842",
  storageBucket: "landingpage-66842.firebasestorage.app",
  messagingSenderId: "282508380126",
  appId: "1:282508380126:web:1472d0ec2876d17e373f4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialise Firestore
const db = getFirestore(app);

// Export de la base de données Firestore
export { db };