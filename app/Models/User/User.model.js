import { database } from 'firebase';

import ChildModel from '../Child/Child.model';

export default ({
  uid,
  displayName,
  child = null,
  isFirstTutorial = true,
  canAnimation = true,
  canContact = false
}) =>
  ({
    uid,
    displayName,
    child: child && new ChildModel(child),
    isFirstTutorial,
    canAnimation,
    canContact,
    timestamp: database.ServerValue.TIMESTAMP
  });
