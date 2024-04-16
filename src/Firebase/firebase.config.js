
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBh2gB0er-mq5XuUYIYoGJPtUpScv39mtM",
  authDomain: "real-estate-auth-b1fd5.firebaseapp.com",
  projectId: "real-estate-auth-b1fd5",
  storageBucket: "real-estate-auth-b1fd5.appspot.com",
  messagingSenderId: "652021206778",
  appId: "1:652021206778:web:56cd7113f43b5f1c8c0343"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;