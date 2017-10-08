import { database } from 'firebase';

export default ({
  name,
  timestamp = database.ServerValue.TIMESTAMP
}) =>
  ({
    name,
    timestamp
  });
