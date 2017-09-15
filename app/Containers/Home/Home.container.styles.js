import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Resources/Fonts';
import { largeSize, mediumSize, smallSize } from '../../Utilities/MediaQuery.utils';

export default EStyleSheet.create({
  _container: {
    alignItems: 'center',
    [smallSize]: {
      backgroundColor: 'red'
    },
    [mediumSize]: {
      backgroundColor: null
    },
    [largeSize]: {
      backgroundColor: 'green'
    }
  },
  _btn: {
    marginVertical: 15,
    width: 200
  },
  _btnText: {
    fontSize: 20,
    fontFamily: Fonts.medium
  }
});
