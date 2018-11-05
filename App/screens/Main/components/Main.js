import React from 'react';
import { View } from 'react-native';
import { AppState } from 'react-native';

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

export class Main extends React.Component {
  state = { interval: null };

  componentDidMount = () => {
    AppState.addEventListener('change', this.handleAppStateChange);
    this.checkTimer(this.props);
  };

  componentWillReceiveProps = newProps => this.checkTimer(newProps);

  componentWillUnmount = () => {
    this.setState({ interval: clearInterval(this.state.interval) });
    AppState.removeEventListener('change', this.handleAppStateChange);
  };

  handleAppStateChange = nextAppState => {
    if (nextAppState === 'active' && !this.props.appIsActive) {
      this.props.toggleAppState();
    } else if (nextAppState === 'background' && this.props.appIsActive) {
      this.props.toggleAppState();
    }
  };

  checkTimer = props => {
    if (!props.isPaused && !this.state.interval) {
      this.setState({ interval: setInterval(() => this.props.timerTick(), 1) });
    } else if (props.isPaused && this.state.interval) {
      this.setState({ interval: clearInterval(this.state.interval) });
    }
  };

  render = () => (
    <View style={[styles.mainContainer, this.props.colors.backgroundColor]}>
      <MenuButton />
      <Session />
      <Time />
      <MainButton />
      <Alarm />
      <Tick />
      <ScreenAwake />
      <Notification />
      <Start />
    </View>
  );
}
