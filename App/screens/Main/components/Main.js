import React from 'react';
import { View } from 'react-native';

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

  componentDidMount = () => this.checkTimer(this.props);

  componentWillReceiveProps = newProps => this.checkTimer(newProps);

  componentWillUnmount = () =>
    this.setState({ interval: clearInterval(this.state.interval) });

  checkTimer = props => {
    if (!props.isPaused && !this.state.interval) {
      this.setState({ interval: setInterval(() => this.timerTick(), 5) });
    } else if (props.isPaused && this.state.interval) {
      this.setState({ interval: clearInterval(this.state.interval) });
    }
  };

  timerTick = () => {
    const time = this.props.endTime - Date.now();
    if (time < 0) {
      this.props.finishSession((finishedActive = false));
    } else if (time < 1000) {
      this.props.finishSession((finishedActive = true));
    } else {
      const minutes = Math.floor(time / 60000);
      const seconds = Math.floor((time % 60000) / 1000);
      if (seconds != this.props.seconds) {
        this.props.updateTime(minutes, seconds);
      }
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
