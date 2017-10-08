import { initializeApp, database } from 'firebase';

export const initializeFireBase = () => {
  initializeApp({
    apiKey: 'AIzaSyAYdbb_andORrzT7Zxn1CZedsoe3Nq5EuY',
    authDomain: 'premium-origin-180814.firebaseapp.com',
    databaseURL: 'https://premium-origin-180814.firebaseio.com',
    projectId: 'premium-origin-180814',
    storageBucket: 'premium-origin-180814.appspot.com',
    messagingSenderId: '936670915515'
  });
};

export const ref = location => database().ref(location);
