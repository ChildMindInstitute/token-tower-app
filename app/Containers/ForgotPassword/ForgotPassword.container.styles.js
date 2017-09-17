import EStyleSheet from 'react-native-extended-stylesheet';

import { largeSize, mediumSize, smallSize } from '../../Utilities/MediaQuery.utils';

export default EStyleSheet.create({
  _title: {
    fontSize: 23,
    fontWeight: 'bold'
  },
  _container: {
    flex: 1
  },
  _contentBlock: {
    flex: 1,
    paddingHorizontal: 30
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
    marginVertical: 12
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
    borderWidth: 1
  },
  _formView: {
    paddingVertical: 15
  }

});
