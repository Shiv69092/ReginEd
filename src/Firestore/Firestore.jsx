import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUwB5uTq0fFaCq0lOToPyc35-Irg_ZrwA",
  authDomain: "grouptwo-aea06.firebaseapp.com",
  projectId: "grouptwo-aea06",
  storageBucket: "grouptwo-aea06.appspot.com",
  messagingSenderId: "158871139042",
  appId: "1:158871139042:web:401269d674daad486924bb",
  measurementId: "G-GYR05QP51W",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore };
