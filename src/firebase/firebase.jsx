// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY7MwlWspiDBTW350XxAck4uqPIQZ_Phw",
  authDomain: "van-life-database.firebaseapp.com",
  projectId: "van-life-database",
  storageBucket: "van-life-database.appspot.com",
  messagingSenderId: "874833888304",
  appId: "1:874833888304:web:6af8f59d594ee4a84659f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const auth = getAuth(app)

const firebaseCollection = collection(db, 'van')

// const isLoggedIn = () => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       console.log(user)
//       return <h1>User is currently logged in </h1>
//     }
//     return <h1> Please log in first </h1>
//   })
// }

export {firebaseCollection, db, auth}