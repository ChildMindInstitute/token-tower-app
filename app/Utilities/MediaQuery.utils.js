import EStyleSheet from 'react-native-extended-stylesheet';

const smallSize = '@media (max-width: 350)'; // IP5
const mediumSize = '@media (min-width: 350) and (max-width: 414)'; // IP6 7
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
