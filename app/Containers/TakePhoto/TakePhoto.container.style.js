import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  _backgroundContainer: {
    flex: 1,
    height: null,
    width: null
  },
  _container: {
    flex: 1,
    paddingHorizontal: 25
  },
  _cameraContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 1
  },
  _coin: {
    width: '100%',
    height: '100%',
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
