// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB5rvh_iC5UolgQuZAGHSqBgxelq1hpJ80',
  authDomain: 'jdevblog-3118c.firebaseapp.com',
  projectId: 'jdevblog-3118c',
  storageBucket: 'jdevblog-3118c.appspot.com',
  messagingSenderId: '227810208794',
  appId: '1:227810208794:web:c02ca0b0b3414b694235a3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
