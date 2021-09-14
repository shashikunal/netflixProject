import firebase from "firebase";
//authentication
import "firebase/auth";
//realtime database
import "firebase/database";
//storage
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDt71V7jrXaBa1PySiAUCAanEOlK1RfMBw",
  authDomain: "netflix-751aa.firebaseapp.com",
  projectId: "netflix-751aa",
  storageBucket: "netflix-751aa.appspot.com",
  messagingSenderId: "279074771560",
  appId: "1:279074771560:web:dc60817fcb0166482421dd",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
