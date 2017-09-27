import EStyleSheet from 'react-native-extended-stylesheet';
import { Fonts } from '../../Resources/Fonts';

import { largeSize, mediumSize, smallSize } from '../../Utilities/MediaQuery.utils';

export default EStyleSheet.create({
  _container: {
    paddingHorizontal: 30,
    paddingTop: 2
  },
  _images: {
    flex: 1,
    width: null,
    height: null
  },
  _imgContainer: {
    marginVertical: 25,
    [smallSize]: {
      height: 270
    },
    [mediumSize]: {
      height: 350
    },
    [largeSize]: {
      height: 370,
      marginVertical: 40
    }
  },
  _btnContainer: {
    flexDirection: 'row'
  },
  _btn: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    [smallSize]: {
      marginHorizontal: 10
    },
    [mediumSize]: {
      marginHorizontal: 20
    },
    [largeSize]: {
      marginHorizontal: 25
    }
  },
  _text: {
    fontFamily: Fonts.bold,
    color: 'green',
    [smallSize]: {
      fontSize: 30
    },
    [mediumSize]: {
      fontSize: 32,
      paddingVertical: 5
    },
    [largeSize]: {
      fontSize: 36
    }
  },
  _text2: {
    fontFamily: Fonts.bold,
    color: 'red',
    [smallSize]: {
      fontSize: 30
    },
    [mediumSize]: {
      fontSize: 32,
      paddingVertical: 5
    },
    [largeSize]: {
      fontSize: 36,
      paddingVertical: 8
    }
  }
});
