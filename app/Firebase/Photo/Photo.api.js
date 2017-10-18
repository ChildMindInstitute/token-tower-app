import { ref } from '../Firebase.utils';

import PhotoModel from '../../Models/Photo/Photo.model';

const photosLocation = 'photos';

const getRef = userId => ref(`${photosLocation}/${userId}`);

const getPhotos = userId => getRef(userId).once('value').then(snap => snap.val());

const addNewPhoto = (userId, value) => {
  const history = getRef(userId).push();
  return history.set(new PhotoModel(value));
};

const removePhotoById = (userId, photoId) => getRef(userId).child(photoId).remove();

export default {
  addNewPhoto,
  getPhotos,
  removePhotoById
};
