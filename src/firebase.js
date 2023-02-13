import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "",
  authDonain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messageSenderId: "",
  apiId: "",
});
export { firebaseConfig as firebase };
