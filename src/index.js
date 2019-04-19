import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

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

const Navigator = createAppContainer(
  createStackNavigator(
    {
      Main: { screen: Main },
      Menu: { screen: Menu }
    },
    {
      initialRouteName: 'Main',
      headerMode: 'none',
      transparentCard: true
    }
  )
);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Navigator />
    </PersistGate>
  </Provider>
);

export default App;
