import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey            : 'API_KEY',
  authDomain        : 'AUTH_DOMAIN',
  databaseURL       : 'DATABASE_URL',
  projectId         : 'PROJECT_ID',
  storageBucket     : 'STORAGE_BUCKET',
  messagingSenderId : 'MESSAGING_SENDER_ID',
  appId             : 'APP_ID'
};

const facebookConfig = {
  appId : 'APP_ID'
};

const googleConfig = {
  clientId : 'CLIENT_ID'
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export default {
  firebase,
  firebaseConfig,
  facebookConfig,
  googleConfig,
  firestore
};
