import { ref } from '../Firebase.utils';

import TokenStackModel from '../../Models/TokenStack/TokenStack.model';

const tokenStackLocation = 'tokenStack';
const getRef = userId => ref(`${tokenStackLocation}/${userId}`);

const listenOnStackChanged = (userId, callback) => getRef(userId).on('child_changed', callback);

const listenOffStackChanged = (userId, callback) => getRef(userId).off('child_changed', callback);

const updateStack = (userId, value) => getRef(userId).set(new TokenStackModel(value));

const getTokenStack = userId => getRef(userId).once('value').then(snap => snap.val());

export default {
  listenOnStackChanged,
  listenOffStackChanged,
  updateStack,
  getTokenStack
};
