import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDc_bNvYgh4C7Z0n1BcfUWlVsRaxTmgX8",
  authDomain: "flutter-chat-app-v1-28f5e.firebaseapp.com",
  databaseURL: "https://flutter-chat-app-v1-28f5e-default-rtdb.firebaseio.com",
  projectId: "flutter-chat-app-v1-28f5e",
  storageBucket: "flutter-chat-app-v1-28f5e.appspot.com",
  messagingSenderId: "297955152167",
  appId: "1:297955152167:web:9e73b8a81773253963d902",
  measurementId: "G-BTLM9P83HF",
};

const app = firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = db.doc(`user/${userAuth.uid}`);
  const snapshot = await userRef.get();
  // console.log(snapshot);
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("ERROR CREATING USER", error.message);
    }
  }
  return userRef;
};
export const auth = app.auth();
export const db = app.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).catch((err) => console.log(err));

export default firebase;
