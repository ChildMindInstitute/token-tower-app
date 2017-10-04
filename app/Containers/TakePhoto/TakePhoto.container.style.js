import EStyleSheet from 'react-native-extended-stylesheet';

import { largeSize, mediumSize, smallSize } from '../../Utilities/MediaQuery.utils';

export default EStyleSheet.create({
  _container: {
    flex: 1,
    paddingHorizontal: 30,
    [smallSize]: {
      paddingHorizontal: 25
    }
  },
  _images: {
    flex: 1,
    height: null,
    width: null
  },
  _oval: {
    borderWidth: 4,
    borderColor: '#f7c34a',
    transform: [
      { scaleY: 1.4 }
    ],
    [smallSize]: {
      height: 140,
      width: 140,
      borderRadius: 120
    },
    [mediumSize]: {
      height: 170,
      width: 170,
      borderRadius: 135
    },
    [largeSize]: {
      height: 200,
      width: 200,
      borderRadius: 150
    }
  },
  _ovalContainer: {
    flex: 1.2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _cameraContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: -5
  },
  _flip: {
    flex: 1
  },
  _cameraView: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  _cameraLogo: {
    flex: 1,
    height: 55
  },
  _dock: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  _imgContainer: {
    height: 40
  },
  _blank: {
    flex: 0.3
  },
  _logoPickImg: {
    flex: 1,
    alignItems: 'flex-end'
  }
});
