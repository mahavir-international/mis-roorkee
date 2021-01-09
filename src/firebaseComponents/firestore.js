import firebase from 'firebase';

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

const firebaseConfiglearnFirebase = {
    apiKey: "AIzaSyAwfriodGpGxNUOxXyFSsMnnEELvcjFdfU",
    authDomain: "learnfirebase-c4b49.firebaseapp.com",
    databaseURL: "https://learnfirebase-c4b49-default-rtdb.firebaseio.com",
    projectId: "learnfirebase-c4b49",
    storageBucket: "learnfirebase-c4b49.appspot.com",
    messagingSenderId: "1016335262694",
    appId: "1:1016335262694:web:91f84c7156ad3be69fec27"
  };

// firebase.initializeApp(firebaseConfiglearnFirebase);

firebase.initializeApp(firebaseConfig);

export default firebase;