import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  
    apiKey: "AIzaSyD2XpsqHFPix300di00XPWG_io-cQDQiVA",
    authDomain: "stories-332e5.firebaseapp.com",
    databaseURL: "https://stories-332e5.firebaseio.com",
    projectId: "stories-332e5",
    storageBucket: "stories-332e5.appspot.com",
    messagingSenderId: "608336632546"
  
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
