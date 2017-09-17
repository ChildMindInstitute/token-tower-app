import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Resources/Fonts';
import { largeSize, mediumSize, smallSize } from '../../Utilities/MediaQuery.utils';

export default EStyleSheet.create({
  _container: {
    flex: 1
  },
  _contentBlock: {
    flex: 1,
    paddingTop: 2,
    paddingHorizontal: 30,
    [smallSize]: {
      paddingHorizontal: 23
    }
  },
  _content: {
    paddingTop: 20,
    [smallSize]: {
      paddingTop: 10
    }
  },
  _descriptionContainer: {
    paddingBottom: 20,
    borderBottomWidth: 1
  },
  _description: {
    [smallSize]: {
      fontSize: 17
    },
    [mediumSize]: {
      fontSize: 19
    },
    [largeSize]: {
      fontSize: 21
    }
  },
  _permissionContainer: {
    paddingTop: 20
  },
  _consent: {
    fontFamily: Fonts.bold,
    [smallSize]: {
      fontSize: 24
    },
    [mediumSize]: {
      fontSize: 26
    },
    [mediumSize]: {
      fontSize: 28
    }
  },
  _permissionBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    [smallSize]: {
      paddingTop: 15
    }
  },
  _permissionText: {
    flex: 1,
    [smallSize]: {
      fontSize: 17
    },
    [mediumSize]: {
      fontSize: 19
    },
    [largeSize]: {
      fontSize: 21
    }
  }
});
