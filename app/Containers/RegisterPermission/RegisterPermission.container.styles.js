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
      paddingHorizontal: 25
    }
  },
  _descriptionContainer: {
    borderBottomWidth: 1,
    [smallSize]: {
      paddingVertical: 12
    },
    [mediumSize]: {
      paddingVertical: 15
    },
    [largeSize]: {
      paddingVertical: 19
    }
  },
  _description: {
    fontFamily: Fonts.regular,
    [smallSize]: {
      fontSize: 15
    },
    [mediumSize]: {
      fontSize: 17
    },
    [largeSize]: {
      fontSize: 19
    }
  },
  _permissionContainer: {
    paddingVertical: 10,
    [largeSize]: {
      paddingVertical: 15
    }
  },
  _consent: {
    fontFamily: Fonts.bold,
    [smallSize]: {
      fontSize: 22
    },
    [mediumSize]: {
      fontSize: 25
    },
    [largeSize]: {
      fontSize: 28
    }
  },
  _permissionBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    [smallSize]: {
      paddingVertical: 5
    }
  },
  _permissionText: {
    flex: 0.9,
    fontFamily: Fonts.regular,
    [smallSize]: {
      fontSize: 15
    },
    [mediumSize]: {
      fontSize: 17
    },
    [largeSize]: {
      fontSize: 19
    }
  }
});
