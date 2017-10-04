import {
  authenticationEmailPassword,
  authenticationCreateNewAccount,
  authenticationSendEmailVerification,
  authenticationForgotPassword
} from '../Authentication/Authentication.reducer';
import { userUpdateProfile } from '../User/User.reducer';

export default [
  authenticationEmailPassword,
  authenticationCreateNewAccount,
  authenticationSendEmailVerification,
  authenticationForgotPassword,
  userUpdateProfile
];
