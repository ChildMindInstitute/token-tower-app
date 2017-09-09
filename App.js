import React from 'react';
import { Provider } from 'react-redux';

import RootNavigator from './app/Navigation/RootNavigator/RootNavigator.component';

import createStore from './app/Redux/Redux';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);

export default App;
