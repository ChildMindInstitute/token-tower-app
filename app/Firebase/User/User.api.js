import { auth } from 'firebase';

import { ref } from '../Firebase.utils';

import UserModel from '../../Models/User/User.model';

const userLocation = 'users';

const getCurrentUser = () => auth().currentUser;

const getUserById = uid => ref(`${userLocation}/${uid}`).once('value').then(snap => snap.val());

const updatePassword = password => auth().currentUser.updatePassword(password);

const updateUserProfile = user =>
  ref(`${userLocation}/${user.uid}`).set(new UserModel(user)).then(() => user.uid);

const updateUserBasicProfile = ({ username: displayName, photoURL }) =>
  auth().currentUser.updateProfile({ displayName, photoURL }).then(getCurrentUser);

export default {
  getCurrentUser,
  getUserById,
  updatePassword,
  updateUserProfile,
  updateUserBasicProfile
};
