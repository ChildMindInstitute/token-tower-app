import EStyleSheet from 'react-native-extended-stylesheet';
import { Fonts } from '../../Resources/Fonts';

import { smallSize } from '../../Utilities/MediaQuery.utils';

export default EStyleSheet.create({
  container: {
    flex: 1
  },
  contentBlock: {
    flex: 1,
    paddingHorizontal: 30
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  h1WelcomeText: {
    textAlign: 'center',
    fontFamily: Fonts.medium,
    fontSize: 50,
    [smallSize]: {
      fontSize: 40
    }
  },
  welcomeText: {
    fontFamily: Fonts.regular,
    fontSize: 30,
    textAlign: 'center',
    [smallSize]: {
      fontSize: 25
    }
  }
});
