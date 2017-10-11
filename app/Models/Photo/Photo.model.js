import { database } from 'firebase';

const Photo = ({
  tokenImgUrl
}) =>
  ({
    tokenImgUrl,
    timeStamp: database.ServerValue.TIMESTAMP
  });

export default Photo;
