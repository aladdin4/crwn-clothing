import fireB from "firebase";

// they will be loaded in fireB as methods of it
import "firebase/auth";
import "firebase/firestore";

// the config obj can be found in the dashboard of the app
const firebaseConfig = {
  apiKey: "AIzaSyCArHCzBCY02YwbmfrCkB7XjSY0NveV14Y",
  authDomain: "crwn-clothing-7206f.firebaseapp.com",
  projectId: "crwn-clothing-7206f",
  storageBucket: "crwn-clothing-7206f.appspot.com",
  messagingSenderId: "31315514434",
  appId: "1:31315514434:web:37a0c322240774ef2cc9db",
  measurementId: "G-3YFY3G6G3X",
};

//initializing the generic app with a specific config object making it our app
fireB.initializeApp(firebaseConfig);

//export the returned main auth object
export const myAuth = fireB.auth();

//export the returned main firestore object
export const myFireStore = fireB.firestore();

// we create a provider for the services we need (currently only google)
// note: the keyword new indicating a class instance
const provider = new fireB.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

//we save the sign-in method and export it, to use it in different situations
// so by just calling it, we will trigger sign in event
export const signInWithGoogle = () => {
  console.log("here");
  myAuth.signInWithPopup(provider);
};

//in case we needed the whole library
export default fireB;
