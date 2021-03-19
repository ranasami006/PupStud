import * as firebase from 'firebase';
 export async function connectFirebase() {
    //   // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDfWD5XnlbKCi4Xpml4oHAF7oLK45nHUYs",
        authDomain: "pupstud-18416.firebaseapp.com",
        projectId: "pupstud-18416",
        storageBucket: "pupstud-18416.appspot.com",
        messagingSenderId: "751184620534",
        appId: "1:751184620534:web:b3b20d475a35eb4eb7f5d7",
        measurementId: "G-TC1EH90VL1"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
      console.log('Firebase connected ');
    }
  }