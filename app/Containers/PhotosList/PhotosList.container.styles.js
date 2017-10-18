import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Resources/Fonts';

export default EStyleSheet.create({
  _container: {
    flex: 1
  },
  _text: {
    fontFamily: Fonts.regular,
    fontSize: 20,
    paddingVertical: 20,
    textAlign: 'center'
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
