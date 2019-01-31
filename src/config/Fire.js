import firebase from 'firebase';

  // Initialize Firebase
const config = {
    apiKey: "AIzaSyCVc0DH2ng1y90LLCkmq6NRXKl2l7rIc-8",
    authDomain: "emergencysystem-a06f0.firebaseapp.com",
    databaseURL: "https://emergencysystem-a06f0.firebaseio.com",
    projectId: "emergencysystem-a06f0",
    storageBucket: "emergencysystem-a06f0.appspot.com",
    messagingSenderId: "947493996403"
};
const fire = firebase.initializeApp(config);
export default fire;