import { firebase } from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

// Firebase Configuration using the uploaded details
const firebaseConfig = {
  apiKey: "AIzaSyDg1OsPWwwYrBWWCNaYC4NaFD8WLWPbuP4",
  authDomain: "therapeia-1d5f7.firebaseapp.com",
  projectId: "therapeia-1d5f7",
  storageBucket: "therapeia-1d5f7.appspot.com",
  messagingSenderId: "160256176538",
  appId: "1:160256176538:android:f3f6cc496231ef84ad0a23",
  databaseURL: "https://therapeia-1d5f7-default-rtdb.firebaseio.com",
};

// Initialize Firebase App if it hasn't been initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firestore();
