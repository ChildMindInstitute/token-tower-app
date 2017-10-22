import EStyleSheet from 'react-native-extended-stylesheet';
import { Fonts } from '../../Resources/Fonts';

import { largeSize, mediumSize, smallSize } from '../../Utilities/MediaQuery.utils';

export default EStyleSheet.create({
  _containerContent: {
    flex: 1,
    paddingHorizontal: 10
  },
  _container: {
    flex: 1
  },
  _containerBlock: {
    flexDirection: 'row',
    marginVertical: 10,
    height: 60
  },
  _inputBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 7,
    [largeSize]: {
      paddingVertical: 10
    }
  },
  _input: {
    flex: 1,
    borderWidth: 1,
    padding: 5,
    textAlign: 'center',
    marginHorizontal: 5,
    [smallSize]: {
      fontSize: 16
    }
  },
  _text: {
    fontFamily: Fonts.regular,
    fontSize: 18,
    [smallSize]: {
      fontSize: 16
    }
  },
  _inputContainer: {
    flex: 0.9
  },
  _token: {
    flex: 0.4,
    [largeSize]: {
      flex: 0.3
    }
  },
  _btnGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  _btn: {
    backgroundColor: '#f7c34a',
    marginVertical: 10
  },
  _textBtn: {
    color: 'white',
    fontFamily: Fonts.bold,
    padding: 15
  },
  _images: {
    marginTop: 22,
    height: 50,
    width: 110
  }
});
