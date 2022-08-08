import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyD7Duv_JGeZLrbej8Euuqna1Hsn_-2wDdU",
    authDomain: "online-shoppee-b2c6a.firebaseapp.com",
    projectId: "online-shoppee-b2c6a",
    storageBucket: "online-shoppee-b2c6a.appspot.com",
    messagingSenderId: "424369685619",
    appId: "1:424369685619:web:affe0014f72956ad495606",
    measurementId: "G-36HB6KHK8R"
  };
  const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });