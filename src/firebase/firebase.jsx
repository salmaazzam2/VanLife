
import { initializeApp } from "firebase/app";

import { collection, getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCY7MwlWspiDBTW350XxAck4uqPIQZ_Phw",
  authDomain: "van-life-database.firebaseapp.com",
  projectId: "van-life-database",
  storageBucket: "van-life-database.appspot.com",
  messagingSenderId: "874833888304",
  appId: "1:874833888304:web:6af8f59d594ee4a84659f5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const auth = getAuth(app)

const firebaseCollection = collection(db, 'van')

export {firebaseCollection, db, auth}