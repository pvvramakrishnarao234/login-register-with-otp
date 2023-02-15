"use strict";

var _app = require("firebase/app");

var _analytics = require("firebase/analytics");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDW5Ljn9sNxcD3mrprGrehydBfOXfn_rFs",
  authDomain: "otp-auth-27e03.firebaseapp.com",
  projectId: "otp-auth-27e03",
  storageBucket: "otp-auth-27e03.appspot.com",
  messagingSenderId: "742064568688",
  appId: "1:742064568688:web:645e51856012872938f7b5",
  measurementId: "G-LV0QBNTJ0R"
}; // Initialize Firebase

var app = (0, _app.initializeApp)(firebaseConfig);
var analytics = (0, _analytics.getAnalytics)(app);
module.exports = app;