import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCUKZuM3TR0FfZj0xpo4owTsrDfJLsRJT8",
    authDomain: "crwn-db-651cc.firebaseapp.com",
    databaseURL: "https://crwn-db-651cc.firebaseio.com",
    projectId: "crwn-db-651cc",
    storageBucket: "crwn-db-651cc.appspot.com",
    messagingSenderId: "499559452209",
    appId: "1:499559452209:web:a9dd022eb4f96ca6f98f10",
    measurementId: "G-XLVTM2DLBW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;