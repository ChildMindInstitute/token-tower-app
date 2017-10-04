import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Resources/Fonts';
import { largeSize, smallSize } from '../../Utilities/MediaQuery.utils';

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
  _formView: {
    paddingVertical: 15
  },
  _title: {
    fontSize: 23,
    fontFamily: Fonts.bold
  },
  _form: {
    marginVertical: 10,
    [largeSize]: {
      marginVertical: 20
    }
  },
  _label: {
    flex: 0.5,
    textAlign: 'left',
    fontSize: 18,
    marginVertical: 10,
    fontFamily: Fonts.regular,
    [smallSize]: {
      fontSize: 16,
      flex: 0.6
    },
    [largeSize]: {
      fontSize: 20
    }
  },
  _inputContainerBlock: {
    flexDirection: 'row',
    marginVertical: 12,
    alignItems: 'center'
  },
  _inputContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    [smallSize]: {
      height: 45
    },
    [largeSize]: {
      height: 55
    }
  },
  _input: {
    flex: 1,
    borderWidth: 1,
    padding: 5
  }
});
