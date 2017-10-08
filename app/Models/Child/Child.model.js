import { database } from 'firebase';

export default ({
  name
}) =>
  ({
    name,
    timestamp: database.ServerValue.TIMESTAMP
  });
