import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Resources/Fonts';
import { largeSize, mediumSize, smallSize } from '../../Utilities/MediaQuery.utils';

export default EStyleSheet.create({
  _container: {
    alignItems: 'center',
    flex: 1,
    [largeSize]: {
      marginTop: 10
    }
  },
  _btncontainer: {
    [mediumSize]: {
      marginTop: 5
    },
    [largeSize]: {
      marginTop: 20
    }
  },
  _btn: {
    marginVertical: 15,
    [smallSize]: {
      marginVertical: 10,
      width: 180
    },
    [mediumSize]: {
      width: 200
    },
    [largeSize]: {
      width: 210
    }
  },
  _btnText: {
    fontFamily: Fonts.medium,
    [smallSize]: {
      fontSize: 20
    },
    [mediumSize]: {
      fontSize: 23
    },
    [largeSize]: {
      fontSize: 25
    }
  }
});
