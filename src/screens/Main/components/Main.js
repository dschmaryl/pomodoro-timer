import React from 'react';
import { AppState, View, BackHandler } from 'react-native';

import { withNavigationFocus } from 'react-navigation';

import Start from '../containers/Start';
import MenuButton from '../containers/MenuButton';
import Session from '../containers/Session';
import Time from '../containers/Time';
import MainButton from '../containers/MainButton';
import Alarm from '../containers/Alarm';
import Tick from '../containers/Tick';
import ScreenAwake from '../containers/ScreenAwake';
import Notification from '../containers/Notification';

import { styles } from './styles';

class MainComponent extends React.Component {
  componentDidMount = () => {
    this.props.setAppState('active');
    AppState.addEventListener('change', this.handleAppStateChange);
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

    if (this.props.runInBackground === undefined)
      this.props.toggleRunInBackground();

    if (this.props.numPomodoros === undefined) this.props.setNumPomodoros();
  };

  componentWillUnmount = () => {
    AppState.removeEventListener('change', this.handleAppStateChange);
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  };

  handleAppStateChange = nextAppState => this.props.setAppState(nextAppState);

  handleBackPress = () => this.props.isFocused;

  render = () => (
    <View style={[styles.mainContainer, this.props.colors.backgroundColor]}>
      <MenuButton />
      <Session />
      <Time textStyle={styles.timeText} />
      <MainButton />
      <Alarm />
      <Tick />
      <ScreenAwake />
      <Notification />
      <Start />
    </View>
  );
}

export const Main = withNavigationFocus(MainComponent);
