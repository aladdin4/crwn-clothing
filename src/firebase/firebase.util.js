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
export const fireS = fireB.firestore();

// we create a provider for the services we need (currently only google)
// note: the keyword new indicating a class instance
const provider = new fireB.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

//we save the sign-in method and export it, to use it in different situations
// so by just calling it, we will trigger sign in event
export const signInWithGoogle = () => {
  myAuth.signInWithPopup(provider);
};

//method that saves user data in the DB(fireS)
export const createUserProfile = async (user, additionalData) => {
  // if there is no user sent as argument return
  if (!user.email) {
    return;
  }

  // refrence {} of this user uid (the dynamically generated id for this specific user)
  const userRef = fireS.doc(`users/${user.uid}`);

  // get the snapshot of the current user
  const userSnapShot = await userRef.get();

  // save the user data only if doesn't already exist in the DB
  if (!userSnapShot.exists) {
    // we consume the data we need to be saved from the user {}, as they are hundreds of attributes and we don't wanna save all of those data.
    const userName = user.displayName;

    const userEmail = user.email;
    const createdAt = new Date();

    try {
      // all the CRUD methods are async
      await userRef.set({
        userName,
        userEmail,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("there was an error creating new user", error.message);
    }
  }
  // console.log(userSnapShot);
  // console.log(user);

  // we return the userRef to the <App/> so we can edit the profile we have for the user not edit the user object returned by the oAuth
  return userRef;
};

//in case we needed the whole library
export default fireB;
