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

/*export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>{
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef,obj);
    });
    return await batch.commit();
}*/

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();

        return{
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
    return transformedCollection.reduce((accumulator,collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    },{});
}

export const getCurrentUser = () => {
    return new Promise((resolve,reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        },reject)
    })
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;