import {
  authenticationEmailPassword,
  authenticationCreateNewAccount,
  authenticationSendEmailVerification,
  authenticationForgotPassword,
  authenticationFb,
  authenticationGg,
  authenticationSignOut
} from '../Authentication/Authentication.reducer';
import {
  userUpdateBasicProfile,
  userUpdateProfile,
  userUpdatePassword,
  userInitProfile
} from '../User/User.reducer';

// fix annoying loading at main screen
// import { tokenStackInit, tokenStackUpdate } from '../TokenStack/TokenStack.reducer';
// import { tokenHistoryAdd } from '../TokenHistory/TokenHistory.reducer';

import { photoAdd, photoInit, photoRemove } from '../Photo/Photo.reducer';

export default [
  authenticationEmailPassword,
  authenticationCreateNewAccount,
  authenticationSendEmailVerification,
  authenticationForgotPassword,
  authenticationFb,
  authenticationGg,
  authenticationSignOut,
  userUpdateBasicProfile,
  userUpdateProfile,
  userUpdatePassword,
  userInitProfile,
  // tokenStackInit,
  // tokenStackUpdate,
  // tokenHistoryAdd,
  photoAdd,
  photoInit,
  photoRemove
];
