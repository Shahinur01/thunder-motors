import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCWtq7ZrVKtRNu_qk0iKqeSCDO4tg9wcE0",
    authDomain: "thunder-car-4d3a1.firebaseapp.com",
    projectId: "thunder-car-4d3a1",
    storageBucket: "thunder-car-4d3a1.appspot.com",
    messagingSenderId: "564543954141",
    appId: "1:564543954141:web:e7fd46f0fd6d8b22d18f34"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }