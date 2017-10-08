import { auth } from 'firebase';

import { ref } from '../Firebase.utils';

const userLocation = 'users';

const getCurrentUser = () => auth().currentUser;

const getUserById = uid => ref(`${userLocation}/${uid}`).once('value').then(snap => snap.val());

const updatePassword = password => auth().currentUser.updatePassword(password);

const updateUserProfile = (uid, data) => ref(`${userLocation}/${uid}`).set(data).then(() => uid);

const updateUserBasicProfile = ({ username: displayName, photoURL }) =>
  auth().currentUser.updateProfile({ displayName, photoURL }).then(getCurrentUser);

export default {
  getCurrentUser,
  getUserById,
  updatePassword,
  updateUserProfile,
  updateUserBasicProfile
};
