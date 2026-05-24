import { initializeApp }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

  getFirestore,

  collection,

  addDoc

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* FIREBASE CONFIG */

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

window.sendMessage = async () => {

  const name =
  document.getElementById("name").value;

  const email =
  document.getElementById("email").value;

  const message =
  document.getElementById("message").value;

  if(
    name === "" ||
    email === "" ||
    message === ""
  ){

    alert("Please Fill All Fields");

    return;
  }

  try{

    await addDoc(
      collection(db, "messages"),
      {

        name,
        email,
        message,
        createdAt:
        new Date()
      }
    );

    alert("Message Sent Successfully!");

    document.getElementById("name").value = "";

    document.getElementById("email").value = "";

    document.getElementById("message").value = "";

  }catch(error){

    console.log(error);

    alert("Error Sending Message");
  }
};