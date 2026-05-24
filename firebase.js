import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

  getFirestore,

  collection,

  addDoc

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* FIREBASE CONFIG */


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-MqXRhFqlRoKG4Lg9J8gRiNmsZEapkUM",
  authDomain: "studytrack-60fda.firebaseapp.com",
  projectId: "studytrack-60fda",
  storageBucket: "studytrack-60fda.firebasestorage.app",
  messagingSenderId: "1000876214113",
  appId: "1:1000876214113:web:98f6b0c6f76e2fb9556720"
};




/* INITIALIZE */

const app =
initializeApp(firebaseConfig);

const db =
getFirestore(app);

/* SEND MESSAGE */

window.sendMessage =
async function(){

  const name =
  document.getElementById("name").value;

  const email =
  document.getElementById("email").value;

  const message =
  document.getElementById("message").value;

  try{

    await addDoc(
      collection(db, "messages"),
      {

        name,
        email,
        message
      }
    );

    alert("Message Sent!");

  }catch(error){

    alert(error);
  }
}