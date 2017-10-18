export const COMMON = {
  ERR: 'error',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  SPINNER_MSG: 'Loading',
  OK: 'OK',
  CANCEL: 'Cancel'
};

export const ERR_MSG = {
  REQUIRED: 'Required',
  MAX_LENGTH: 'Max length',
  MIN_LENGTH: 'Min length',
  INVALID_EMAIL: 'Invalid email',
  LOGIN_ERROR_TITLE: 'Login Error',
  REGISTER_ERROR_TITLE: 'Registration Error',
  RESET_PASSWORD_TITLE: 'Reset password Failed',
  UPDATE_PASSWORD_TITLE: 'Update password Failed',
  INVALID_INFO_TITLE: 'Information is invalid',
  CAN_NOT_ENTER_TITLE: 'Can not enter',
  CREATE_PRIZE_FAIL_TITLE: 'Create prize Failed',
  LOGIN_VERIFY_EMAIL: 'Your email address is not verified. please verify your email address!',
  NOT_A_NUMBER: 'Not a number',
  GREATER_THAN_ZERO: 'Greater than 0',
  SMALLER_THAN_A_THOUSAND: 'Less than 1000',
  PASSWORD_NOT_MATCH: 'Passwords don\'t match!',
  GOOGLE_SIGN_IN: 'Can\'t sign in with Google.',
  PERMISSION_AGREEMENT: 'To register, you must agree to the terms of service.',
  INVALID_INFO: 'Please fill in the valid information.',
  NEED_CHILD_INFO: 'Please provide child information.',
  PRIZE_EMPTY: 'Prize can not be empty.',
  MAX_PRIZE: 'Maximun 3 prizes.',
  ADD_TOKEN_TITLE: 'Add token Failed',
  ADD_TOKEN: 'Don\'t have enough token to add.',
  REMOVE_TOKEN_TITLE: 'Remove token Failed',
  REMOVE_TOKEN: 'Don\'t have enough token to remove.',
  EMAIL_ALREADY_IN_USE: 'This email address is already in use by another account.',
  LOGIN_USER_NOT_FOUND: 'Please type in your correct login and password.'
};

export const MSG = {
  RESET_PASSWORD_TITLE: 'Reset Password',
  VERIFY_MAIL_CHANGE_PASSWORD: 'Please check your email to confirm new password!',
  ZERO_TOKEN: 'You don\'t have any tokens yet. ',
  SET_PRIZE: 'You can set goals or prizes.',
  ACHIEVE_ALL_GOALS: 'Congratulation! you now achieve all goals.',
  NOT_SET_GOAL_KID: 'Your prizes will be available soon.',
  ADD_TOKEN_TITLE: 'Add token',
  ADD_TOKEN: 'One token added to the totem.',
  REMOVE_TOKEN_TITLE: 'Remove token',
  REMOVE_TOKEN: 'One token removed from the totem.',
  REMOVE_TOKEN_ASK: 'Do you want to remove 1 token from Piggy container?'
};

export const BTN = {
  DEFAULT: 'SUBMIT',
  KIND: {
    DEFAULT: 'default',
    PLAIN: 'plain'
  }
};

export const DIRECTION = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical'
};

export const PLATFORM = {
  IOS: 'ios',
  ANDROID: 'android'
};

export const TOKENS = {
  ACCESS: 'access_token',
  REFRESH: 'refresh_token',
  IDENTITY: 'id_token',
  IDENTITY_FIELDS: {
    USER_ID: 'uid',
    EMAIL: 'email'
  }
};

export const USER_ROLE = {
  PARENT: 'parent',
  CHILD: 'child'
};

export const REPLENISH_TOKEN_TYPE = {
  DAILY: 'daily',
  WEEKLY: 'weekly',
  MONTHLY: 'monthly'
};

export const TOKEN_ACTION_TYPE = {
  ADD: 'add',
  REMOVE: 'remove'
};
