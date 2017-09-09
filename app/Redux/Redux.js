import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import reducers from './Reducers/Reducers';

const storeCreator = () => createStore(
  combineReducers(reducers),
  compose(applyMiddleware(promiseMiddleware(), thunk))
);

export default storeCreator;
