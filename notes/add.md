//firebase config

```
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
export default firebase;
```

adding data

```
//dispatch dispatches action to reducer
import firebase from "../../config/fireConfig";
const db =firebase.firestore();



db.collection('projects').add({
        authorFirstName:'sanjay',
        authorLastName:'singh',
        title:'inserting title',
        content:'content here'
    })
    .then(docRef=>{
        console.log(docRef.id);
    })
    .catch(err=>{
        console.log("error in inserting data",err);
    })


```
