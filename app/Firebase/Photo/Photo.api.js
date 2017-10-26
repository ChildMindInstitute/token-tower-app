import { ref } from '../Firebase.utils';

import PhotoModel from '../../Models/Photo/Photo.model';

const photosLocation = 'photos';

const getRef = userId => ref(`${photosLocation}/${userId}`);

const getPhotos = userId => getRef(userId).once('value').then(snap => snap.val());

const addNewPhoto = (userId, value) => {
  const history = getRef(userId).push();
  const photo = new PhotoModel(value);
  return history.set(photo).then(() => ({ id: history.key, base64: photo.tokenImgUrl }));
};

const removePhotoById = (userId, photoId) => getRef(userId).child(photoId).remove().then(() => photoId);

export default {
  addNewPhoto,
  getPhotos,
  removePhotoById
};
