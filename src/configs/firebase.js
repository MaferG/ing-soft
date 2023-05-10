import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7QhE3KZnDXOkDPbK0CDdpHuwaar82ChM",
  authDomain: "taskmanager-89b13.firebaseapp.com",
  projectId: "taskmanager-89b13",
  storageBucket: "taskmanager-89b13.appspot.com",
  messagingSenderId: "825339242466",
  appId: "1:825339242466:web:6f458fcdaceafa7809bbbb",
  measurementId: "G-FKBLXVF6B8",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
