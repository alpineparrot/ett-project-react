import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDv7IhiLTbASYG8XNRdXiesDEFjtvUTzxI",
  authDomain: "rtk-blog-fb2fe.firebaseapp.com",
  projectId: "rtk-blog-fb2fe",
  storageBucket: "rtk-blog-fb2fe.appspot.com",
  messagingSenderId: "614174610207",
  appId: "1:614174610207:web:945199bcb487c704ced62a",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const storage = getStorage(app);
