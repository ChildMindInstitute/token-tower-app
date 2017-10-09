import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Resources/Fonts';
import { largeSize, mediumSize, smallSize } from '../../Utilities/MediaQuery.utils';

export default EStyleSheet.create({
  _container: {
    flex: 1
  },
  _content: {
    [smallSize]: {
      marginVertical: 10
    },
    [mediumSize]: {
      marginVertical: 15
    },
    [largeSize]: {
      marginVertical: 20
    }
  },
  _contentBlock: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 2,
    [smallSize]: {
      paddingTop: 0,
      paddingHorizontal: 25
    }
  },
  _inputContainerBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    [largeSize]: {
      paddingVertical: 5
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
    color: '#606060'
  },
  _dropdownContainerStyle: { flex: 1 },
  _inputDropdown: {
    flex: 1,
    borderWidth: 1
  },
  _fieldBlock: {
    flex: 1,
    [smallSize]: {
      height: 50
    },
    [mediumSize]: {
      height: 55
    },
    [largeSize]: {
      height: 60
    }
  },
  _label: {
    flex: 2.2,
    textAlign: 'left',
    fontFamily: Fonts.regular,
    [smallSize]: {
      fontSize: 17
    },
    [mediumSize]: {
      fontSize: 18
    },
    [largeSize]: {
      marginVertical: 13,
      fontSize: 19
    }
  },
  _image: {
    flex: 1,
    width: null,
    height: null
  },
  _logoText: {
    marginRight: 20,
    fontFamily: Fonts.regular,
    [smallSize]: {
      fontSize: 16
    },
    [mediumSize]: {
      fontSize: 19
    },
    [largeSize]: {
      fontSize: 21
    }
  },
  _title: {
    fontSize: 23,
    fontFamily: Fonts.bold
  },
  _dropdownStyle: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    marginRight: -1
  },
  _dropdownTextStyle: {
    fontFamily: Fonts.regular,
    textAlign: 'center',
    [smallSize]: {
      fontSize: 15
    },
    [mediumSize]: {
      fontSize: 16
    },
    [largeSize]: {
      fontSize: 17
    }
  },
  _textStyle: {
    fontFamily: Fonts.regular,
    color: '#606060',
    textAlign: 'center',
    [smallSize]: {
      padding: 15,
      fontSize: 15
    },
    [mediumSize]: {
      padding: 17,
      fontSize: 16
    },
    [largeSize]: {
      padding: 19,
      fontSize: 17
    }
  }

});
