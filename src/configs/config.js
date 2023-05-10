// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCqIlwqUJTCtM7D2ped8ndSlpR95MGkBVc",
  authDomain: "task-manager-c97aa.firebaseapp.com",
  databaseURL: "https://task-manager-c97aa-default-rtdb.firebaseio.com",
  projectId: "task-manager-c97aa",
  storageBucket: "task-manager-c97aa.appspot.com",
  messagingSenderId: "631096024891",
  appId: "1:631096024891:web:37b8d271d319dd3f15211e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const analytics = getAnalytics(app);
