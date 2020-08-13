import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
const firebase = require("firebase");
require("firebase/firestore");
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDbp61Zks2TqgSCOMeelsnjDc5U-k-0uec",
  authDomain: "note-taker-a6929.firebaseapp.com",
  databaseURL: "https://note-taker-a6929.firebaseio.com",
  projectId: "note-taker-a6929",
  storageBucket: "note-taker-a6929.appspot.com",
  messagingSenderId: "418483157982",
  appId: "1:418483157982:web:d52fdffa726dc5c18d7b4f",
  measurementId: "G-6R3WG6K5QR",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

ReactDOM.render(<App />, document.getElementById("evernote-container"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
