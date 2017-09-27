import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Resources/Fonts';

export default EStyleSheet.create({
  _container: {
    flex: 1
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
  }
});
