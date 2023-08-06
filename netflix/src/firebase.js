// eslint-disable-next-line no-unused-vars
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBzUp0QTKiPSUmnLPFSVKALMwYON7OkVRg",
    authDomain: "netflix-clone-98df4.firebaseapp.com",
    projectId: "netflix-clone-98df4",
    storageBucket: "netflix-clone-98df4.appspot.com",
    messagingSenderId: "671521412527",
    appId: "1:671521412527:web:461f2d7254b10d7c254b5a"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);