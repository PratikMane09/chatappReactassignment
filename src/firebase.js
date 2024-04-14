import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey:"SyAlCaSrlOMPQAq4ToB6qGqFp7jwOOce0-wOOce0-4",
  authDomain: "chat-react-4e809.firebaseapp.com",
  projectId: "chat-react-4e809",
  storageBucket: "chat-react-4e809.appspot.com",
  messagingSenderId: "847075924164",
  appId: "1:847075924164:web:885fe7d969cdc201ca1191",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
