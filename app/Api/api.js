import * as firebase from 'firebase';

export const initializeFireBase = () => {
  firebase.initializeApp({
    apiKey: 'AIzaSyAYdbb_andORrzT7Zxn1CZedsoe3Nq5EuY',
    authDomain: 'premium-origin-180814.firebaseapp.com',
    databaseURL: 'https://premium-origin-180814.firebaseio.com',
    projectId: 'premium-origin-180814',
    storageBucket: 'premium-origin-180814.appspot.com',
    messagingSenderId: '936670915515'
  });
};

const forgotPassword = ({ email }) =>
  firebase.auth().sendPasswordResetEmail(email);

const authenicate =
  ({ email, password }) =>
    firebase.auth().signInWithEmailAndPassword(email, password);

const register =
  ({ password, email }) =>
    firebase.auth().createUserWithEmailAndPassword(email, password);

const sendEmailVerification = () =>
  firebase.auth().currentUser.sendEmailVerification();

const updateUserProfile = ({ username }) =>
  firebase.auth().currentUser.updateProfile({ displayName: username });

export default {
  authenicate,
  register,
  forgotPassword,
  sendEmailVerification,
  updateUserProfile
};
