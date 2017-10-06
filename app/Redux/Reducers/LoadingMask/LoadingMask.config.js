import {
  authenticationEmailPassword,
  authenticationCreateNewAccount,
  authenticationSendEmailVerification,
  authenticationForgotPassword,
  authenticationFb,
  authenticationGg
} from '../Authentication/Authentication.reducer';
import { userUpdateProfile, userUpdatePassword } from '../User/User.reducer';

export default [
  authenticationEmailPassword,
  authenticationCreateNewAccount,
  authenticationSendEmailVerification,
  authenticationForgotPassword,
  authenticationFb,
  authenticationGg,
  userUpdateProfile,
  userUpdatePassword
];
