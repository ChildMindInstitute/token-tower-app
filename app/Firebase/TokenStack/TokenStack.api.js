import { ref } from '../Firebase.utils';

import TokenStackModel from '../../Models/TokenStack/TokenStack.model';

const tokenStackLocation = 'tokenStack';
const getRef = userId => ref(`${tokenStackLocation}/${userId}`);

const listenOnStackChanged = userId => getRef(userId).on('child_added');

const updateStack = (userId, value) => getRef(userId).set(new TokenStackModel(value));

export default {
  listenOnStackChanged,
  updateStack
};
