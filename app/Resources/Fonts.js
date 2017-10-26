export const Fonts = {
  light: 'Roboto-Light',
  regular: 'Roboto-Regular',
  medium: 'Roboto-Medium',
  bold: 'Roboto-Bold',
  italic: 'Roboto-Italic'
};

export const Resource = {
  /* eslint-disable global-require */
  [Fonts.light]: require('../Assets/Fonts/Roboto-Light.ttf'),
  [Fonts.regular]: require('../Assets/Fonts/Roboto-Regular.ttf'),
  [Fonts.medium]: require('../Assets/Fonts/Roboto-Medium.ttf'),
  [Fonts.bold]: require('../Assets/Fonts/Roboto-Bold.ttf'),
  [Fonts.italic]: require('../Assets/Fonts/Roboto-Italic.ttf'),
  icon: require('../Assets/Fonts/TokenTowerIcons/tokentower.ttf')
  /* eslint-enable global-require */
};
