import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import rootReducer from './reducers';

import Start from './screens/Start';
import Settings from './screens/Settings';
import Timer from './screens/Timer';

const store = createStore(
  persistReducer({ key: 'root', storage }, rootReducer)
);
const persistor = persistStore(store);
persistor.purge();

const RootStack = createStackNavigator(
  {
    Start: {
      screen: Start
    },
    Settings: {
      screen: Settings
    },
    Timer: {
      screen: Timer
    }
  },
  {
    initialRouteName: 'Start',
    navigationOptions: { header: null },
    cardStyle: { backgroundColor: 'transparent' }
  }
);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { isReady: true };
  }

  // componentDidMount() {
  //   // Notifications.createChannelAndroidAsync('pomodoro', {
  //   //   name: 'pomodoro',
  //   //   sound: true,
  //   //   priority: 'max'
  //   // });
  //   this._loadResources();
  // }

  // async _loadResources() {
  //   await Font.loadAsync({
  //     Cookie: require('../assets/fonts/Cookie-Regular.ttf')
  //   });
  // }

  render() {
    if (this.state.isReady) {
      return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RootStack />
          </PersistGate>
        </Provider>
      );
    } else {
      return (
        // <AppLoading
        //   startAsync={this._loadResources}
        //   onFinish={() => this.setState({ isReady: true })}
        //   onError={console.warn}
        // />
        null
      );
    }
  }
}
