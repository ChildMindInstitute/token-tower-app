import {
  authenticationEmailPassword,
  authenticationCreateNewAccount,
  authenticationSendEmailVerification,
  authenticationForgotPassword,
  authenticationFb,
  authenticationGg,
  authenticationSignOut
} from '../Authentication/Authentication.reducer';
import { userUpdateBasicProfile, userUpdateProfile, userUpdatePassword } from '../User/User.reducer';

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
  userUpdatePassword
];
