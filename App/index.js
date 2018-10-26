import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import rootReducer from './reducers';

import Start from './screens/Start';
import Menu from './screens/Menu';
import Main from './screens/Main';

const store = createStore(
  persistReducer({ key: 'root', storage }, rootReducer),
  applyMiddleware(thunk)
);
const persistor = persistStore(store);

const { firstRun, showStart } = store.getState().settings;

const RootStack = createStackNavigator(
  {
    Start: { screen: Start },
    Menu: { screen: Menu },
    Main: { screen: Main }
  },
  {
    initialRouteName: firstRun || showStart ? 'Start' : 'Main',
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
