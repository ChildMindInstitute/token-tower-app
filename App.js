import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { reducer } from 'redux-form';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import RootNavigator from './app/Navigation/RootNavigator/RootNavigator.component';

const middleware = [
  promiseMiddleware(),
  thunk
];

const store = createStore(
  combineReducers({
    form: reducer
  }),
  compose(
    applyMiddleware(...middleware)
  )
);

const App = () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);

export default App;
