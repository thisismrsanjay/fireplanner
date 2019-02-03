import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var config = {
    apiKey: "AIzaSyDZ-FspFDfC7lZLGqKeC-eDLUWElo-PdEg",
    authDomain: "fireplannersanjay.firebaseapp.com",
    databaseURL: "https://fireplannersanjay.firebaseio.com",
    projectId: "fireplannersanjay",
    storageBucket: "fireplannersanjay.appspot.com",
    messagingSenderId: "828927245589"
  };
  firebase.initializeApp(config);

firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;