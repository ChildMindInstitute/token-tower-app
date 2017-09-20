import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Resources/Fonts';
import { largeSize, mediumSize, smallSize } from '../../Utilities/MediaQuery.utils';

export default EStyleSheet.create({
  _container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _bgrContainer: {
    flex: 1
  },
  _topContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  _bottomContainer: {
    flexDirection: 'row',
    height: 50,
    marginVertical: 20
  },
  _bottomImageContainer: {
    flex: 1
  },
  _images: {
    flex: 1,
    width: null,
    height: null
  },
  _bubble: {
    borderWidth: 1,
    height: 270,
    width: 280,
    borderRadius: 140,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
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
  _tutorialContainer: {
    zIndex: 1,
    position: 'absolute'

  },
  _backgroundContainer: {
    zIndex: 0,
    position: 'relative',
    opacity: 0.5
  }
});
