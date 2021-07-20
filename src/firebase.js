import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAa02NuYOQNGvV49lUEOXcypqCfgYIV_Wg",
  authDomain: "social-app-54175.firebaseapp.com",
  projectId: "social-app-54175",
  storageBucket: "social-app-54175.appspot.com",
  messagingSenderId: "140725457751",
  appId: "1:140725457751:web:d11788b2fc0ca5f6132412",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
