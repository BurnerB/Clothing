import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyArmmrjW4tg_7s53xeAdZYDQwt4XldqkE8",
    authDomain: "clothing-db-28859.firebaseapp.com",
    databaseURL: "https://clothing-db-28859.firebaseio.com",
    projectId: "clothing-db-28859",
    storageBucket: "clothing-db-28859.appspot.com",
    messagingSenderId: "521151961693",
    appId: "1:521151961693:web:43eea7686b73efe59a0bb4",
    measurementId: "G-Q4B49Y01VV"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;