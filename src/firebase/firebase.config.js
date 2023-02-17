import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDmQttF8D6Y802gl6O57WJ1EpkqK2pbqXo",
  authDomain: "job-board-risan.firebaseapp.com",
  projectId: "job-board-risan",
  storageBucket: "job-board-risan.appspot.com",
  messagingSenderId: "1062960866376",
  appId: "1:1062960866376:web:99fc98f7e629c9889ca47d"
};


const app = initializeApp(firebaseConfig);

export default app