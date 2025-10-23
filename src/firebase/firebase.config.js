// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYwGKHwkI4OaXCINnpd4ytKCTKoOcoxqI",
  authDomain: "dragon-news-breaking-56f2b.firebaseapp.com",
  projectId: "dragon-news-breaking-56f2b",
  storageBucket: "dragon-news-breaking-56f2b.firebasestorage.app",
  messagingSenderId: "441099213883",
  appId: "1:441099213883:web:7db2e5b2aaf5ed0a2e101e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;