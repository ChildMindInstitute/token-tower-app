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
import { tokenStackInit, tokenStackUpdate } from '../TokenStack/TokenStack.reducer';
import { tokenHistoryAdd } from '../TokenHistory/TokenHistory.reducer';

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
  tokenStackInit,
  tokenStackUpdate,
  tokenHistoryAdd
];
