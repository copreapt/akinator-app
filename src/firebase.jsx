import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyALDFFk9xjLRCYykEguUDXt50vIbIQGFuA",
  authDomain: "guess-who-a8016.firebaseapp.com",
  projectId: "guess-who-a8016",
  storageBucket: "guess-who-a8016.appspot.com",
  messagingSenderId: "160596754946",
  appId: "1:160596754946:web:0498c1f624c288811add1b",
  measurementId: "G-KLS1LX5NFT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export const db = getFirestore(app);