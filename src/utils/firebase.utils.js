import { initializeApp } from 'firebase/app';

import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBf7r0bG9JBSWujLHYUNwE2gyPzAHwzmns',
  authDomain: 'crown-clothing-db-1b314.firebaseapp.com',
  projectId: 'crown-clothing-db-1b314',
  storageBucket: 'crown-clothing-db-1b314.appspot.com',
  messagingSenderId: '987433198244',
  appId: '1:987433198244:web:9c0eda43b84939e2423c31',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
