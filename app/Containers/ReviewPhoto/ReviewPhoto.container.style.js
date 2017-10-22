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
    height: null,
    alignItems: 'center',
    justifyContent: 'center'
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
  _imgWrap: { flex: 1 },
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
      fontSize: 28
    },
    [mediumSize]: {
      fontSize: 30,
      paddingVertical: 5
    },
    [largeSize]: {
      fontSize: 33,
      paddingVertical: 8
    }
  },
  _text2: {
    fontFamily: Fonts.bold,
    color: 'red',
    [smallSize]: {
      fontSize: 28
    },
    [mediumSize]: {
      fontSize: 30,
      paddingVertical: 5
    },
    [largeSize]: {
      fontSize: 33,
      paddingVertical: 8
    }
  },
  _ovalImg: {
    width: 130,
    height: 125,
    borderRadius: 65,
    transform: [{ scaleY: 1.5 }]
  }
});
