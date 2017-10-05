import {
  authenticationEmailPassword,
  authenticationCreateNewAccount,
  authenticationSendEmailVerification,
  authenticationForgotPassword,
  authenticationFb
} from '../Authentication/Authentication.reducer';
import { userUpdateProfile, userUpdatePassword } from '../User/User.reducer';

export default [
  authenticationEmailPassword,
  authenticationCreateNewAccount,
  authenticationSendEmailVerification,
  authenticationForgotPassword,
  authenticationFb,
  userUpdateProfile,
  userUpdatePassword
];
