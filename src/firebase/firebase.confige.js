import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // ✅ Import Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyCMli7eUsuCQvKumWnIl0UA7aR-hUjL08E",
  authDomain: "business-books-43ccd.firebaseapp.com",
  projectId: "business-books-43ccd",
  storageBucket: "business-books-43ccd.appspot.com",
  messagingSenderId: "513448146375",
  appId: "1:513448146375:web:550a3a496adb55322215e2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app); // ✅ Export Storage
export default app;
