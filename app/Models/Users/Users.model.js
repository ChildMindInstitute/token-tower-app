import { database } from 'firebase';

export default ({
  uid,
  displayName,
  childName,
  isTutorial = true,
  isAnimation = true,
  timestamp = database.ServerValue.TIMESTAMP
}) =>
  ({
    uid,
    displayName,
    childName,
    isTutorial,
    isAnimation,
    timestamp
  });
