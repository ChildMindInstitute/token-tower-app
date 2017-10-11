import { ref } from '../Firebase.utils';

import PhotoModel from '../../Models/Photo/Photo.model';

const photosLocation = 'photos';

const getPhotos = userId => ref(`${photosLocation}/${userId}`).once('value').then(snap => snap.val());

const addNewPhoto = (userId, value) => {
  const history = ref(`${photosLocation}/${userId}`).push();
  return history.set(new PhotoModel(value));
};

export default {
  addNewPhoto,
  getPhotos
};
