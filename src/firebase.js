import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAN-98XIZCz8gHxerzac1ilnlktAdQt9Kk",
    authDomain: "netflix-build-ae572.firebaseapp.com",
    projectId: "netflix-build-ae572",
    storageBucket: "netflix-build-ae572.appspot.com",
    messagingSenderId: "17608908600",
    appId: "1:17608908600:web:5f40ad03eab65b2c97abcd"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;