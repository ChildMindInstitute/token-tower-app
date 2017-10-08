import { database } from 'firebase';

import ChildModel from '../Child/Child.model';

export default ({
  uid,
  displayName,
  child = null,
  isFirstTutorial = true,
  canAnimation = true,
  canContact = false,
  timestamp = database.ServerValue.TIMESTAMP
}) =>
  ({
    uid,
    displayName,
    child: child && new ChildModel(child),
    isFirstTutorial,
    canAnimation,
    canContact,
    timestamp
  });
