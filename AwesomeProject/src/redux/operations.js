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
import { nanoid } from "@reduxjs/toolkit";

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

      console.log(uid);

      const userDocRef = doc(db, "users", uid);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        // console.debug("userData", userData);

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
      console.debug(thunkAPI.getState());

      await signOut(auth);

      console.debug("Пользователь успешно вышел из аккаунта");

      return;
    } catch (error) {
      console.error(error);
    }
  }
);

export const authStateChangeUser = createAsyncThunk(
  "user/authStateChangeUser",
  async (credentials, thunkAPI) => {
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.debug(user);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
);

export const addUserPost = createAsyncThunk(
  "user/addUserPost",
  async (post, thunkAPI) => {
    try {
      console.debug(post);
      // Получение текущего пользователя
      const user = auth.currentUser;
      if (!user) {
        console.error("Пользователь не авторизован");
        return;
      }

      const userId = user.uid;
      const userRef = doc(db, "users", userId);

      // Получение существующих данных пользователя
      const userDocSnapshot = await getDoc(userRef);
      if (!userDocSnapshot.exists()) {
        console.error("Документ пользователя не найден");
        return;
      }

      const userData = userDocSnapshot.data();
      const id = nanoid();

      // Создание нового post
      const newPost = {
        ...post,
        id,
      };

      // Обновление массива posts в данных пользователя
      const updatedPosts = [...userData.posts, newPost];
      const updatedUserData = {
        ...userData,
        posts: updatedPosts,
      };

      // Обновление документа пользователя в Firestore
      await setDoc(userRef, updatedUserData);

      console.log("Новый post успешно добавлен в массив posts");

      // Возвращение обновленных данных пользователя
      return updatedUserData;
    } catch (error) {
      console.error("Ошибка при добавлении post:", error);
      throw error;
    }
  }
);

export const addCommentToPost = createAsyncThunk(
  "user/addCommentToPost",
  async ({ postId, comment }, thunkAPI) => {
    console.debug(postId);
    try {
      if (comment.text === "") {
        alert("Пусте повідомлення, напишіть текст");
        return;
      }
      // Получение текущего пользователя
      const user = auth.currentUser;
      if (!user) {
        console.error("Пользователь не авторизован");
        return;
      }

      const userId = user.uid;
      const userRef = doc(db, "users", userId);

      // Получение существующих данных пользователя
      const userDocSnapshot = await getDoc(userRef);
      if (!userDocSnapshot.exists()) {
        console.error("Документ пользователя не найден");
        return;
      }

      const userData = userDocSnapshot.data();

      // Найти пост по id в массиве постов пользователя
      const updatedPosts = userData.posts.map((post) => {
        if (post.id === postId) {
          // Создание нового комментария
          const newComment = {
            userName: comment.userName,
            text: comment.text,
            date: Date.now(),
          };

          // Добавление нового комментария к массиву комментариев поста
          return {
            ...post,
            comments: [...post.comments, newComment],
          };
        }
        return post;
      });

      // Обновление массива posts в данных пользователя
      const updatedUserData = {
        ...userData,
        posts: updatedPosts,
      };

      // Обновление документа пользователя в Firestore
      await setDoc(userRef, updatedUserData);

      console.log("Комментарий успешно добавлен к посту");

      // Возвращение обновленных данных пользователя
      return updatedUserData;
    } catch (error) {
      console.error("Ошибка при добавлении комментария:", error);
      throw error;
    }
  }
);
