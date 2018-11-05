import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyBfSkZDU8MH8Kmp37fgxrYbQb36Srsqcsk",
  authDomain: "teste-react-firebase.firebaseapp.com",
  databaseURL: "https://teste-react-firebase.firebaseio.com",
  projectId: "teste-react-firebase",
  storageBucket: "teste-react-firebase.appspot.com",
  messagingSenderId: "631369521673"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase 