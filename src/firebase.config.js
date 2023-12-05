
import { initializeApp } from "firebase/app";

const firebaseConfig = {

  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId

  apiKey: "AIzaSyB9bnRp7NjzY0JCniB23PHBn-I3Q8Wzxu8",
  authDomain: "assignment-twelve-c5a2f.firebaseapp.com",
  projectId: "assignment-twelve-c5a2f",
  storageBucket: "assignment-twelve-c5a2f.appspot.com",
  messagingSenderId: "1027879835255",
  appId: "1:1027879835255:web:f2be7d6f7e66465eb1d872"

};

const app = initializeApp(firebaseConfig);
export default app;