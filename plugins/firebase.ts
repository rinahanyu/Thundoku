// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAbp5F_B77ss-4Z1dafLvd9Pd2UPAxaA-g',
  authDomain: 'tsundoku-44a8d.firebaseapp.com',
  projectId: 'tsundoku-44a8d',
  storageBucket: 'tsundoku-44a8d.appspot.com',
  messagingSenderId: '790847299161',
  appId: '1:790847299161:web:4f61c6676ec036d1129b48'
}

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig)
export default (context, inject) => {
  inject('firebase', firebaseApp)
}
