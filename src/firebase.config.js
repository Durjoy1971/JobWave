// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: "jobwave-connect-dot.firebaseapp.com",
  projectId: "jobwave-connect-dot",
  storageBucket: "jobwave-connect-dot.appspot.com",
  messagingSenderId: "289660365544",
  appId: "1:289660365544:web:fc65370f9446743989f75d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
// export default db;
