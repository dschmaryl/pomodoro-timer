import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';

import Menu from './screens/Menu';
import Main from './screens/Main';

// persistor.purge();

const Navigator = createStackNavigator(
  {
    Main: { screen: Main },
    Menu: { screen: Menu }
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
    transparentCard: true
  }
);

export const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Navigator />
    </PersistGate>
  </Provider>
);
