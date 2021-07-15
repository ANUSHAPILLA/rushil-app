import * as firebase from 'firebase';
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var db = {
    apiKey: "AIzaSyBkHsn0gM4hjMskT52utLGR_p-dELh75HU",
    authDomain: "bsa2-d47c3.firebaseapp.com",
    projectId: "bsa2-d47c3",
    storageBucket: "bsa2-d47c3.appspot.com",
    messagingSenderId: "326890212215",
    appId: "1:326890212215:web:de67a5a43ceae406db6f72"
  };


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(db);
  let firestore = firebase.firestore();
}

export default firebase.firestore();
