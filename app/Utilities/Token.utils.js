import Decode from 'jwt-decode';
import { AsyncStorage as storage } from 'react-native';
import { TOKENS } from './Constant.utils';

export const PersistentStorage = storage;
const TemporaryStorage = {
  identityTokenStore: null // in-memory storage only
};

const minSecondsOnAccessToken = 60;
const minSecondsOnRefreshToken = 0;

/* ********   ACCESS_ TOKEN GET/SET   ******** */
const setAccessToken = accessToken => PersistentStorage.setItem(TOKENS.ACCESS, `${accessToken}`);
const getAccessToken = () => PersistentStorage.getItem(TOKENS.ACCESS);

/* ********    _REFRESH_ TOKEN GET/SET   ******** */
const setRefreshToken = refreshToken => PersistentStorage.setItem(TOKENS.REFRESH, `${refreshToken}`);
const getRefreshToken = () => PersistentStorage.getItem(TOKENS.REFRESH);

/* ********    _IDENTITY_ TOKEN GET/SET   ******** */
const setIdentityToken = (identityToken) => { TemporaryStorage.identityTokenStore = identityToken; };
const getIdentityToken = () => TemporaryStorage.identityTokenStore;

/* ********    MULTI-TOKEN GET/SET    ******** */
const allTokensClear = () => {
  PersistentStorage.removeItem(TOKENS.REFRESH);
  PersistentStorage.removeItem(TOKENS.ACCESS);
  setIdentityToken(null);
};

const allTokensPersist = (authTokens) => {
  if (authTokens[TOKENS.IDENTITY]) setIdentityToken(authTokens[TOKENS.IDENTITY]);
  if (authTokens[TOKENS.REFRESH]) setRefreshToken(authTokens[TOKENS.REFRESH]);
  if (authTokens[TOKENS.ACCESS]) setAccessToken(authTokens[TOKENS.ACCESS]);
};

const setIdentityFromToken = (idToken) => {
  const identityFields = Object.values(TOKENS.IDENTITY_FIELDS);
  const decodedIdToken = Decode(idToken);

  identityFields.forEach(field =>
    PersistentStorage.setItem(field, decodedIdToken[field])
  );
};

const getIdentityItem = key => PersistentStorage.getItem(key);

const clearIdentity = () => {
  Object.values(TOKENS.IDENTITY_FIELDS).forEach(item =>
    PersistentStorage.removeItem(item)
  );
};

/* ********    TOKEN PARSING/ASSESSING UTILITIES    ******** */

// JWT spec is seconds from 1970, not milliseconds
const tokenEpochSeconds = encodedToken => encodedToken && Decode(encodedToken).exp;

const checkTokenValidity = (encodedToken, minimumBufferSeconds = 0) => {
  if (!encodedToken) {
    throw new Error(
      "'checkTokenValidity' did not receive a JWT token as argument"
    );
  }
  // returns boolean
  // (consider adapting to return resolved/rejected promises.)
  const expirationSeconds = tokenEpochSeconds(encodedToken);
  const currentSeconds = Date.now() / 1000; // Date object is in ms
  const isValid = expirationSeconds > currentSeconds - minimumBufferSeconds;
  // alt: return (isValid) ? Promise.resolve(isValid) : Promise.reject(isValid);
  return isValid;
};

const checkRefreshTokenValidity = async () => {
  // returns promise, as token retrieval is async
  const token = await getRefreshToken();
  return token ? checkTokenValidity(token, minSecondsOnRefreshToken) : false;
};

const checkAccessTokenValidity = async () => {
  // returns promise, as token retrieval is async
  // promise rejected if token invalid, fulfilled if valid
  const token = await getAccessToken();
  return token ? checkTokenValidity(token, minSecondsOnAccessToken) : false;
};

export default {
  checkAccessTokenValidity,
  checkRefreshTokenValidity,
  allTokensClear,
  clearIdentity,
  getAccessToken,
  getIdentityToken,
  getRefreshToken,
  getIdentityItem,
  allTokensPersist,
  setAccessToken,
  setIdentityToken,
  setIdentityFromToken,
  setRefreshToken
};
