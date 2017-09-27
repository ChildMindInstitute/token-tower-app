import EStyleSheet from 'react-native-extended-stylesheet';

// PORTRAIT
const smallSize = '@media (max-width: 360)'; // IP5
const mediumSize = '@media (min-width: 361) and (max-width: 413)'; // IP6 7
const largeSize = '@media (min-width: 414)'; // IP 6+ 7+

export {
  smallSize,
  mediumSize,
  largeSize
};

// calc styles
export const calculateStyles = () => {
  EStyleSheet.build();
};
