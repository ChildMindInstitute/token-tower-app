import Expo from 'expo';

const play = async (sound) => {
  await Expo.Audio.Sound.create(sound, { shouldPlay: true });
};

export default {
  play
};
