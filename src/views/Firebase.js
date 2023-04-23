import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA3R_v-_7K88a1I43jhwPlTjDIS2vI8WOA",
  authDomain: "meuprojetoreact-138cf.firebaseapp.com",
  projectId: "meuprojetoreact-138cf",
  storageBucket: "meuprojetoreact-138cf.appspot.com",
  messagingSenderId: "632960144127",
  appId: "1:632960144127:web:8e6ee6ab49903a384372ca",
  measurementId: "G-TVZF7K8VZ5"
};

//Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;