import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Resources/Fonts';
import { smallSize } from '../../Utilities/MediaQuery.utils';

export default EStyleSheet.create({
  _container: {
    flex: 1
  },
  _header: {
    paddingHorizontal: 20,
    [smallSize]: {
      paddingHorizontal: 0
    }
  },
  _text: {
    fontFamily: Fonts.bold,
    fontSize: 25,
    padding: 20,
    [smallSize]: {
      fontSize: 23,
      paddingLeft: 10
    }
  },
  _emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3d3f3b'
  },
  _emptyText: {
    padding: 10,
    color: 'white',
    fontSize: 15,
    fontFamily: Fonts.bold
  },
  _emptyIconContainer: {
    padding: 10,
    borderRadius: 99,
    borderColor: 'white',
    borderWidth: 1
  }
});
