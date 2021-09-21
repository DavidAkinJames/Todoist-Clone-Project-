import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCSM4UzQzR0loA6czjQLLrQxgqN-Lrunmg",
  authDomain: "todoist-clone-2a922.firebaseapp.com",
  databaseURL: "https://todoist-clone-2a922-default-rtdb.firebaseio.com",
  projectId: "todoist-clone-2a922",
  storageBucket: "todoist-clone-2a922.appspot.com",
  messagingSenderId: "167672916577",
  appId: "1:167672916577:web:98729be60d5a4953ed9820"
});




export {firebaseConfig as firebase};