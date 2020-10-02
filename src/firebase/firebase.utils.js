import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCE3me9BzIChaucapZ9tyBjfW3taLOVh7M",
    authDomain: "crwn-db-82d44.firebaseapp.com",
    databaseURL: "https://crwn-db-82d44.firebaseio.com",
    projectId: "crwn-db-82d44",
    storageBucket: "crwn-db-82d44.appspot.com",
    messagingSenderId: "610293492627",
    appId: "1:610293492627:web:714d2bea155f2f7b375666"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists){
        const createDate = new Date();
        const {displayName, email} = userAuth;

        try {
            await userRef.set({
                displayName,
                email,
                createDate,
                ...additionalData
            })
        }catch (error) {
            console.log('something wrong');
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;