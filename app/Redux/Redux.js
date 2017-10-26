import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
// only for development
// import logger from 'redux-logger';

import reducers from './Reducers/Reducers';

const storeCreator = () => {
  const store = createStore(
    persistReducer({ key: 'root', storage, blacklist: ['loadingMask'] }, combineReducers(reducers)),
    compose(applyMiddleware(promiseMiddleware(), thunk))
    // only for development
    // compose(applyMiddleware(promiseMiddleware(), thunk, logger))
  );
  persistStore(store);
  return store;
};

export default storeCreator;
