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
import Timer from './screens/Timer';

const store = createStore(
  persistReducer({ key: 'root', storage }, rootReducer)
);
const persistor = persistStore(store);
persistor.purge();

const RootStack = createStackNavigator(
  {
    Start: { screen: Start },
    Menu: { screen: Menu },
    Timer: { screen: Timer }
  },
  {
    initialRouteName: 'Start',
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
