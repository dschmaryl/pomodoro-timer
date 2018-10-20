import React from 'react';
import { View } from 'react-native';

import MenuButton from '../containers/MenuButton';
import Session from '../containers/Session';
import Time from '../containers/Time';
import MainButton from '../containers/MainButton';
import Alarm from '../containers/Alarm';
import ScreenAwake from '../containers/ScreenAwake';
import Notification from '../containers/Notification';

import { styles } from './styles';

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: null,
      isPaused: true
    };
  }

  componentDidMount() {
    this.checkTimer(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.checkTimer(newProps);
  }

  componentWillUnmount() {
    this.setState({ interval: clearInterval(this.state.interval) });
  }

  checkTimer(props) {
    if (!props.isPaused && this.state.isPaused) {
      this.setState({
        interval: setInterval(() => this.timerTick(), 10),
        isPaused: false
      });
      if (props.soundIsPlaying) this.props.toggleSoundPlaying();
    } else if (props.isPaused && !this.state.isPaused) {
      this.setState({
        interval: clearInterval(this.state.interval),
        isPaused: true
      });
    }
  }

  finishTimer() {
    if (this.props.soundIsEnabled) {
      this.props.toggleSoundPlaying();
    }
    this.props.finishSession(this.props.pauseAtSessionEnd);
  }

  timerTick() {
    const time = this.props.endTime - Date.now();
    if (time < 1000) {
      this.finishTimer();
    } else {
      const minutes = Math.floor(time / 60000);
      const seconds = Math.floor((time % 60000) / 1000);
      if (seconds != this.props.seconds) {
        this.props.updateTime(minutes, seconds);
      }
    }
  }

  render() {
    return (
      <View style={[styles.mainContainer, this.props.colors.backgroundColor]}>
        <MenuButton />
        <Session />
        <Time />
        <MainButton />
        <Alarm />
        <ScreenAwake />
        <Notification />
      </View>
    );
    // }
  }
}
