import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDK-25hJZcDWX4JBI7dg3OqbujDbwqspB8",
  authDomain: "eduvia-804fc.firebaseapp.com",
  projectId: "eduvia-804fc",
  storageBucket: "eduvia-804fc.firebasestorage.app",
  messagingSenderId: "121036189679",
  appId: "1:121036189679:web:e6962a6836eaa4e7e9d01a",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default app;
