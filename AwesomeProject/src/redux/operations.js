import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";

export const register = createAsyncThunk(
  "user/register",
  async (credentials, thunkAPI) => {
    try {
      console.debug(credentials);
      const name = credentials.name;
      const email = credentials.email;
      const password = credentials.password;

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { uid } = userCredential.user;

      const userData = {
        user: { name, email },
        uid,
        posts: [],
      };

      console.debug(userData);

      await setDoc(doc(collection(db, "users"), uid), userData);

      console.debug(
        "Пользователь зарегистрирован и информация о нем добавлена в Firestore"
      );

      return userData;
    } catch (error) {
      console.error("Ошибка при регистрации пользователя:", error);
    }
  }
);

export const logIn = createAsyncThunk(
  "user/logIn",
  async (credentials, thunkAPI) => {
    try {
      const email = credentials.email;
      const password = credentials.password;

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { uid } = userCredential.user;

      const userDocRef = doc(db, "users", uid);
      const userDocSnapshot = await getDoc(userDocRef);

      console.debug("userDocSnapshot", userDocSnapshot);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        console.debug("userData", userData);

        return userData;
      } else {
        console.debug("Документ пользователя не найден");
      }

      return;
    } catch (error) {
      alert("LogIn failed. Passwords or email entered incorrectly");
      console.error("Ошибка при регистрации пользователя:", error);
    }
  }
);

export const logOut = createAsyncThunk(
  "user/logOut",
  async (credentials, thunkAPI) => {
    try {
      await signOut(auth);

      console.debug("Пользователь успешно вышел из аккаунта");

      return;
    } catch (error) {
      console.error(error);
    }
  }
);
