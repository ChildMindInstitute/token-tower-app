import { calculateStyles } from './app/Utilities/MediaQuery.utils';
import { portraitOnly } from './app/Utilities/ScreenOrientation.utils';
import { initializeFireBase } from './app/Firebase/Firebase.utils';

export default () => {
  calculateStyles();
  portraitOnly();
  initializeFireBase();
};
