import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCuvQeGUsqTbG3QGbUnSG8D02-1RTMuZys",
  authDomain: "isgood-test.firebaseapp.com",
  databaseURL: "https://isgood-test.firebaseio.com",
  projectId: "isgood-test",
  storageBucket: "",
  messagingSenderId: "873884236672",
  appId: "1:873884236672:web:84d1de7b14be8dec0f1f65",
  measurementId: "G-XXLG1S91M1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)


export default firebase;