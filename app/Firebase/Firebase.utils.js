import { initializeApp, database } from 'firebase';

export const initializeFireBase = () => {
  initializeApp({
    apiKey: 'AIzaSyD75oo04itTTic2KSkS2_q32_fj9YCke9k',
    authDomain: 'token-e7f83.firebaseapp.com',
    databaseURL: 'https://token-e7f83.firebaseio.com',
    projectId: 'token-e7f83',
    storageBucket: 'token-e7f83.appspot.com',
    messagingSenderId: '211351537237'
  });
};

export const ref = location => database().ref(location);
