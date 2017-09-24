import { calculateStyles } from './app/Utilities/MediaQuery.utils';
import { portraitOnly } from './app/Utilities/ScreenOrientation.utils';

export default () => {
  calculateStyles();
  portraitOnly();
};
