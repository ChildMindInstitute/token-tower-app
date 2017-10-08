import { auth } from 'firebase';

const signIn = ({ email, password }) => auth().signInWithEmailAndPassword(email, password);

const register = ({ password, email }) => auth().createUserWithEmailAndPassword(email, password);

const forgotPassword = ({ email }) => auth().sendPasswordResetEmail(email);

const sendEmailVerification = () => auth().currentUser.sendEmailVerification();

const signInWithFB = (token) => {
  const credential = auth.FacebookAuthProvider.credential(token);
  return auth().signInWithCredential(credential);
};

const signInWithGG = (idToken, token) => {
  const credential = auth.GoogleAuthProvider.credential(idToken, token);
  return auth().signInWithCredential(credential);
};

const signOut = () => auth().signOut();

export default {
  signIn,
  register,
  forgotPassword,
  sendEmailVerification,
  signInWithFB,
  signInWithGG,
  signOut
};
