import React from 'react';
import { createFluidNavigator } from 'react-navigation-fluid-transitions';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import rootReducer from './reducers';

import Menu from './screens/Menu';
import Main from './screens/Main';

const store = createStore(
  persistReducer({ key: 'root', storage, blacklist: ['picker'] }, rootReducer),
  applyMiddleware(thunk)
);

const persistor = persistStore(store);

// persistor.purge();

const Navigator = createFluidNavigator(
  {
    Menu: { screen: Menu },
    Main: { screen: Main }
  },
  {
    initialRouteName: 'Main'
  }
);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Navigator />
    </PersistGate>
  </Provider>
);

export default App;
