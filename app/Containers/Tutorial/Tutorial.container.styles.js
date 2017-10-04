import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Resources/Fonts';
import { largeSize, mediumSize, smallSize } from '../../Utilities/MediaQuery.utils';

export default EStyleSheet.create({
  _container: {
    flex: 1
  },
  _main: {
    opacity: 0.5
  },
  _tutorialContainer: {
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  _bubble: {
    zIndex: 3,
    borderWidth: 1,
    height: 270,
    width: 280,
    borderRadius: 140,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    [largeSize]: {
      marginTop: 100
    }
  },
  _text1: {
    fontFamily: Fonts.regular,
    fontSize: 30,
    textAlign: 'center'
  },
  _text2: {
    fontFamily: Fonts.regular,
    fontSize: 35,
    textAlign: 'center'
  },
  _text3: {
    fontFamily: Fonts.regular,
    fontSize: 20,
    width: 250,
    textAlign: 'center'
  },
  _arrow: {
    zIndex: 1,
    transform: [{ rotate: '160deg' }],
    marginRight: 180,
    marginTop: -30,
    width: 130,
    height: 130,
    [smallSize]: {
      width: 90,
      height: 90
    }
  },
  _arrow1: {
    zIndex: 1,
    width: 130,
    height: 130,
    transform: [{ rotate: '135deg' }],
    marginTop: -30,
    [smallSize]: {
      width: 90,
      height: 90
    }
  },
  _arrow2: {
    zIndex: 1,
    width: 130,
    height: 130,
    transform: [{ rotate: '110deg' }],
    marginLeft: 160,
    marginTop: -30,
    [smallSize]: {
      width: 90,
      height: 90
    }
  },
  _arrow3: {
    position: 'relative',
    zIndex: 1,
    width: 130,
    height: 130,
    transform: [{ rotate: '155deg' }],
    marginRight: 75,
    [smallSize]: {
      width: 90,
      height: 90
    }
  },
  _arrow4: {
    position: 'absolute',
    zIndex: 2,
    width: 130,
    height: 130,
    transform: [{ rotate: '115deg' }],
    left: 65,
    [smallSize]: {
      width: 90,
      height: 90
    }
  }
});
