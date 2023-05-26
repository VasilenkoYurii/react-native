import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth/react-native";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBNvcJOj0tTOu8o0AzBPbQy9dVeXnoCE0c",
  authDomain: "react-native-hw-4d751.firebaseapp.com",
  databaseURL:
    "https://react-native-hw-4d751-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-native-hw-4d751",
  storageBucket: "react-native-hw-4d751.appspot.com",
  messagingSenderId: "480643996817",
  appId: "1:480643996817:web:40f56acac1dae8393ab330",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getDatabase(app);
export const db = getFirestore(app);
