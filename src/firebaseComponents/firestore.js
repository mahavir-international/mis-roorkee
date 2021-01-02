import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCqNB3_kHgsnQqNV3Tsox6pazJe9fiSq7M",
    authDomain: "mis-roorkee.firebaseapp.com",
    databaseURL: "https://mis-roorkee-default-rtdb.firebaseio.com",
    projectId: "mis-roorkee",
    storageBucket: "mis-roorkee.appspot.com",
    messagingSenderId: "525396273536",
    appId: "1:525396273536:web:74b908e6e08bbe94887965",
    measurementId: "G-324XRDLLCM"
  };

firebase.initializeApp(config);

export default firebase;