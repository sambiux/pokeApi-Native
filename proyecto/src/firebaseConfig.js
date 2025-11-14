import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAIIdh6F_L_vpgLPrSbhg1i2IP1L64bBV0",
  authDomain: "pokeapi-18cea.firebaseapp.com",
  projectId: "pokeapi-18cea",
  storageBucket: "pokeapi-18cea.firebasestorage.app",
  messagingSenderId: "54323959480",
  appId: "1:54323959480:web:669787b0e725598543064d",
  measurementId: "G-HSGM8MJGT0"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app); // ✅ ¡Esto es necesario!
export { auth, db };