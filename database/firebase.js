import firebase from 'firebase';

import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyD5rWfhTyPDOsbC3TKi3RP3bxBxZhD5ki0",
    authDomain: "react-native-firebase-6c363.firebaseapp.com",
    databaseURL: "https://react-native-firebase-6c363.firebaseio.com",
    projectId: "react-native-firebase-6c363",
    storageBucket: "react-native-firebase-6c363.appspot.com",
    messagingSenderId: "337769034933",
    appId: "1:337769034933:web:4b4bb6657df731169bbafc"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default{
    firebase,
    db,
}