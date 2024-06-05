
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAEAXWupZkv70ZKpXEKck3WOLq4RLIqfzg",
  authDomain: "authentication-bf2fc.firebaseapp.com",
  projectId: "authentication-bf2fc",
  storageBucket: "authentication-bf2fc.appspot.com",
  messagingSenderId: "1059739433548",
  appId: "1:1059739433548:web:327889d5e6df527853d2e9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)