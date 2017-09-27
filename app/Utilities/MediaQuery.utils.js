import EStyleSheet from 'react-native-extended-stylesheet';

// PORTRAIT
const smallSize = '@media (max-width: 361)'; // IP5
const mediumSize = '@media (min-width: 361) and (max-width: 414)'; // IP6 7
const largeSize = '@media (min-width: 414)'; // IP 6+ 7+

// LANDSCAPE
const smallSizeLandscape = '@media (max-width: 568)'; // IP5
const mediumSizeLandscape = '@media (min-width: 568) and (max-width: 667)'; // IP6 7
const largeSizeLandscape = '@media (min-width: 667)'; // IP 6+ 7+

export {
  smallSize,
  mediumSize,
  largeSize,
  smallSizeLandscape,
  mediumSizeLandscape,
  largeSizeLandscape
};

// calc styles
export const calculateStyles = () => {
  EStyleSheet.build();
};
