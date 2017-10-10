import { database } from 'firebase';

const TokenHistory = ({
  tokenImgUrl,
  type
}) =>
  ({
    tokenImgUrl,
    type,
    timeStamp: database.ServerValue.TIMESTAMP
  });

export default TokenHistory;
