import { ref } from '../Firebase.utils';

import TokenStackModel from '../../Models/TokenStack/TokenStack.model';

const tokenStackLocation = 'tokenStack';
const getRef = userId => ref(`${tokenStackLocation}/${userId}`);

const listenOnStackAdded = (userId, callback) => getRef(userId).on('child_added', callback);

const listenOffStackAdded = (userId, callback) => getRef(userId).off('child_added', callback);

const listenOnStackChanged = (userId, callback) => getRef(userId).on('child_changed', callback);

const listenOffStackChanged = (userId, callback) => getRef(userId).off('child_changed', callback);

const listenOnStackRemoved = (userId, callback) => getRef(userId).on('child_removed', callback);

const listenOffStackRemoved = (userId, callback) => getRef(userId).off('child_removed', callback);

const updateStack = (userId, value) => getRef(userId).set(new TokenStackModel(value));

const getTokenStack = userId => getRef(userId).once('value').then(snap => snap.val());

export default {
  listenOnStackAdded,
  listenOffStackAdded,
  listenOnStackChanged,
  listenOffStackChanged,
  listenOnStackRemoved,
  listenOffStackRemoved,
  updateStack,
  getTokenStack
};
