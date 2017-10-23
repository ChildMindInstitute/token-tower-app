import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

// only for development
// import logger from 'redux-logger';

import reducers from './Reducers/Reducers';

const storeCreator = () => createStore(
  combineReducers(reducers),
  compose(applyMiddleware(promiseMiddleware(), thunk))
  // only for development
  // compose(applyMiddleware(promiseMiddleware(), thunk, logger))
);

export default storeCreator;
