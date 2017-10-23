
import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Resources/Fonts';
import { largeSize, mediumSize, smallSize } from '../../Utilities/MediaQuery.utils';

export default EStyleSheet.create({
  _container: {
    flex: 1
  },
  _contentBlock: {
    flex: 1,
    paddingHorizontal: 30,
    [smallSize]: {
      paddingHorizontal: 25
    }
  },
  _inputContainerBlock: {
    flexDirection: 'row',
    paddingBottom: 20,
    [smallSize]: {
      paddingBottom: 18
    }
  },
  _label: {
    flex: 0.7,
    fontFamily: Fonts.regular,
    textAlign: 'center',
    [smallSize]: {
      fontSize: 18,
      marginVertical: 9
    },
    [mediumSize]: {
      fontSize: 20,
      marginVertical: 10
    },
    [largeSize]: {
      marginVertical: 12,
      fontSize: 21
    }
  },
  _inputContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  _input: {
    flex: 1,
    borderWidth: 1,
    padding: 5,
    [largeSize]: {
      fontSize: 19
    }
  },
  _forgot: {
    color: 'grey',
    textAlign: 'right',
    fontFamily: Fonts.regular,
    fontSize: 15,
    [largeSize]: {
      fontSize: 18
    }
  },
  _viewInput: {
    [smallSize]: {
      paddingTop: 4
    },
    [mediumSize]: {
      paddingTop: 20
    },
    [largeSize]: {
      paddingTop: 27
    }
  }
});
