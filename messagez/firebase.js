import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyD2AvG-GXzn-SUvM7ykKLWAd2rsp55nwkY",
  authDomain: "message-z-867b9.firebaseapp.com",
  projectId: "message-z-867b9",
  storageBucket: "message-z-867b9.appspot.com",
  messagingSenderId: "586260511377",
  appId: "1:586260511377:web:a5526e27e1fcb5c323dd30"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };