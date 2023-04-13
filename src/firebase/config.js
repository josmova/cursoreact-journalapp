// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/* const firebaseConfig = {
	apiKey: process.env.VITE_APP_API_KEY,
	authDomain: process.env.VITE_APP_AUTH_DOMAIN,
	projectId: process.env.VITE_APP_PROJECT_ID,
	storageBucket: process.env.VITE_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.VITE_APP_MESSAGING_SENDER_ID,
	appId: process.env.VITE_APP_APP_ID,
	measurementId: process.env.VITE_APP_MEASUREMENT_ID,
}; */

const firebaseConfig = {
	apiKey: "AIzaSyDicXsjjYmFJatXz3VYjBe_ekTXlOYiptg",
	authDomain: "cursoreact-journalapp.firebaseapp.com",
	projectId: "cursoreact-journalapp",
	storageBucket: "cursoreact-journalapp.appspot.com",
	messagingSenderId: "460027675362",
	appId: "1:460027675362:web:0ae884b4b168fbd936d4bb",
	measurementId: "G-EY6VZRSM7J",
};

// Iniciando Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
/* export const FirebaseAnalytics = getAnalytics(FirebaseApp); */
export const FirebaseAppAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
