// Import the functions you need from the SDKs you need
import { initializeApp } 
from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js'

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword  }
 from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

import { getFirestore,collection,addDoc, setDoc, doc }
from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAxA4krosvMHd3RlGv5EAu15KYQNAC29w",
  authDomain: "cloud-development-5c136.firebaseapp.com",
  projectId: "cloud-development-5c136",
  storageBucket: "cloud-development-5c136.appspot.com",
  messagingSenderId: "785722221029",
  appId: "1:785722221029:web:98d6b4e14eb21563c7cf0c",
  measurementId: "G-KSDJ5N9EFP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//module autenticvation
const auth = getAuth();
// firestore
const db= getFirestore(app);
//validar login
export const Loginvalidation=(email,password)=>
signInWithEmailAndPassword(auth, email, password)
//registro de usuarios nuevos
export const registeruser=(email,password)=>
createUserWithEmailAndPassword(auth, email, password)

///////firestore
export const registeradddoc= (nombre,cedula,apellidos,ciudad)=>{
  addDoc(collection(db,"DBdatos"),{
    nombre,
    cedula,
    apellidos,
    ciudad,

  })

  
}
export const registeruserdoc= (nombre,direccion,telefono,ciudad,departamento,rh,genero,email)=>{
  setDoc(doc(db,"DBdatos2",email),{
    nombre,
    direccion,
    telefono,
    ciudad,
    departamento,
    rh,
    genero,
    email
  })
}