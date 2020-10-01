import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyAjE1cObOo-UOmWdiwC98Lz6xr_1zhpnGM",
  authDomain: "ammazon-clone-by-inam.firebaseapp.com",
  databaseURL: "https://ammazon-clone-by-inam.firebaseio.com",
  projectId: "ammazon-clone-by-inam",
  storageBucket: "ammazon-clone-by-inam.appspot.com",
  messagingSenderId: "924316337173",
  appId: "1:924316337173:web:8e90dab0ae4765d81d7a1c",
  measurementId: "G-RSZXN3KFV0",
});

const auth = firebase.auth();

export { auth };
