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
    paddingTop: 2
  },
  _inputContainerBlock: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10
  },
  _inputContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  _input: {
    flex: 1,
    borderWidth: 1
  },
  _inputBlock: {
    [mediumSize]: {
      marginVertical: 10
    },
    [largeSize]: {
      marginVertical: 15
    }
  },
  _label: {
    flex: 0.6,
    textAlign: 'left',
    marginVertical: 10,
    [smallSize]: {
      fontSize: 16
    },
    [mediumSize]: {
      fontSize: 19
    },
    [largeSize]: {
      marginVertical: 13,
      fontSize: 21
    }
  },
  _image: {
    flex: 1,
    width: null,
    height: null
  },
  _logoText: {
    marginRight: 20,
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
  _socialLogos: {
    flexDirection: 'row',
    alignItems: 'center',
    [mediumSize]: {
      marginBottom: 10
    },
    [largeSize]: {
      marginBottom: 21
    }
  },
  _logos: {
    flex: 0.5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    height: 60
  },
  _para: {
    [smallSize]: {
      fontSize: 16
    },
    [mediumSize]: {
      fontSize: 18
    },
    [largeSize]: {
      fontSize: 20
    }
  }
});
