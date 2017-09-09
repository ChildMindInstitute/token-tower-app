import React from 'react';
import { Provider } from 'react-redux';

import createStore from './app/Redux/Redux';

import RootNavigator from './app/Navigation/RootNavigator/RootNavigator.component';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);

export default App;
