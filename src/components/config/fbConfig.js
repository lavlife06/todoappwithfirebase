import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDKR-SwJpkDBQCeAE5ozsKzXiPP-Z6ybgw",
  authDomain: "todoapp-9f133.firebaseapp.com",
  databaseURL: "https://todoapp-9f133.firebaseio.com",
  projectId: "todoapp-9f133",
  storageBucket: "todoapp-9f133.appspot.com",
  messagingSenderId: "1006679171815",
  appId: "1:1006679171815:web:92a0ebd1d94517074ab842",
  measurementId: "G-GERW5Q7271"
};

// Initialize Firebase
export const fire = firebase.initializeApp(firebaseConfig);
export const db = fire.firestore();