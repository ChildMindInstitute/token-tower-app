import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Resources/Fonts';
import { largeSize, mediumSize, smallSize } from '../../Utilities/MediaQuery.utils';

export default EStyleSheet.create({
  _outerContainer: { flex: 1 },
  _container: {
    flex: 1,
    paddingTop: 2,
    paddingHorizontal: 30,
    [smallSize]: {
      paddingHorizontal: 25
    }
  },
  _textContainer: {
    flex: 1
  },
  _textBubble: {
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: '#f7c34a',
    justifyContent: 'center',
    alignItems: 'center',
    [smallSize]: {
      height: 245,
      width: 245,
      borderRadius: 125
    },
    [mediumSize]: {
      height: 300,
      width: 300,
      borderRadius: 150
    },
    [largeSize]: {
      height: 330,
      width: 330,
      borderRadius: 170
    }
  },
  _text: {
    fontFamily: Fonts.regular,
    textAlign: 'center',
    [smallSize]: {
      width: 190
    },
    [mediumSize]: {
      width: 260
    },
    [largeSize]: {
      width: 290
    }
  },
  _wrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    [smallSize]: {
      marginTop: 5,
      flex: 1.2
    },
    [mediumSize]: {
      marginTop: 10,
      flex: 1.3
    },
    [largeSize]: {
      marginTop: 20,
      flex: 1.5
    }
  },
  _img: {
    flex: 1,
    flexDirection: 'row',
    [smallSize]: {
      flex: 1
    }
  },
  _present: {
    flex: 0.6,
    position: 'relative',
    zIndex: 0,
    left: -18
  },
  _treasure: {
    flex: 1,
    zIndex: 1,
    position: 'relative',
    left: 10
  },
  _fireworkContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  firework: {
    flex: 1,
    width: null,
    height: null,
    opacity: 0.5
  }
});
