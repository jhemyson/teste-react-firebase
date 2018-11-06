import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyAm0nJg4IzyYNJ8kqiko8fFiQ6tdfCtP4k",
  authDomain: "teste-react-firebase-ab588.firebaseapp.com",
  databaseURL: "https://teste-react-firebase-ab588.firebaseio.com",
  projectId: "teste-react-firebase-ab588",
  storageBucket: "teste-react-firebase-ab588.appspot.com",
  messagingSenderId: "702255608441"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase 