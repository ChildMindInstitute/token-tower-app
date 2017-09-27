
import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Resources/Fonts';
import { largeSize, mediumSize, smallSize } from '../../Utilities/MediaQuery.utils';

export default EStyleSheet.create({
  _container: {
    flex: 1
  },
  _contentBlock: {
    flex: 1,
    paddingHorizontal: 30
  },
  _inputContainerBlock: {
    flexDirection: 'row',
    paddingBottom: 20,
    [smallSize]: {
      paddingBottom: 19
    }
  },
  _label: {
    flex: 0.7,
    fontFamily: Fonts.regular,
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
    [smallSize]: {
      fontSize: 18,
      marginVertical: 9
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
    padding: 5
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
      paddingTop: 6
    },
    [mediumSize]: {
      paddingTop: 20
    },
    [largeSize]: {
      paddingTop: 27
    }
  }
});
