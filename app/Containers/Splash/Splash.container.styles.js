import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Resources/Fonts';
import { largeSize, mediumSize, smallSize } from '../../Utilities/MediaQuery.utils';

export default EStyleSheet.create({
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
      height: 250,
      width: 250,
      borderRadius: 130
    },
    [mediumSize]: {
      height: 300,
      width: 300,
      borderRadius: 150
    },
    [largeSize]: {
      height: 350,
      width: 350,
      borderRadius: 180
    }
  },
  _text: {
    fontFamily: Fonts.regular,
    textAlign: 'center',
    [smallSize]: {
      width: 160
    },
    [mediumSize]: {
      width: 200
    },
    [largeSize]: {
      width: 250
    }
  },
  _wrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    [smallSize]: {
      marginTop: 5,
      flex: 1.13
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
  }
});
