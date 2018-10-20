import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import rootReducer from './reducers';

import Start from './screens/Start';
import Menu from './screens/Menu';
import Main from './screens/Main';

const store = createStore(
  persistReducer({ key: 'root', storage }, rootReducer)
);
const persistor = persistStore(store);

// don't forget to set 'focusTime' and 'showStart' in reducers
// persistor.purge();

const { firstBoot, showStart } = store.getState().settings;

const RootStack = createStackNavigator(
  {
    Start: { screen: Start },
    Menu: { screen: Menu },
    Main: { screen: Main }
  },
  {
    initialRouteName: firstBoot || showStart ? 'Start' : 'Main',
    navigationOptions: { header: null },
    cardStyle: { backgroundColor: 'transparent' }
  }
);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RootStack />
    </PersistGate>
  </Provider>
);

export default App;
