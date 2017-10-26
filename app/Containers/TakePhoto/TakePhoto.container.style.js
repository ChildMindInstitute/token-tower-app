import EStyleSheet from 'react-native-extended-stylesheet';

import { smallSize } from '../../Utilities/MediaQuery.utils';

export default EStyleSheet.create({
  _backgroundContainer: {
    flex: 1,
    height: null,
    width: null
  },
  _container: {
    flex: 1,
    paddingHorizontal: 30,
    [smallSize]: {
      paddingHorizontal: 25
    }
  },
  _cameraContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  _coin: {
    width: 270,
    height: 270,
    position: 'relative',
    zIndex: 1
  },
  _dock: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  _images: {
    flex: 1,
    height: null,
    width: null
  },
  _flip: {
    flex: 1
  },
  _cameraLogo: {
    flex: 1,
    height: 55
  },
  _logoPickImg: {
    flex: 1,
    alignItems: 'flex-end'
  },
  _backgroundTransparent: { backgroundColor: 'transparent' }
});
