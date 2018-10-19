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
      isPaused: true,
      currentSession: props.session,
      finishedInBackground: false
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
    if (!props.isPaused && props.endTime - Date.now() < 1000)
      this.setState({ finishedInBackground: true }, this.finishTimer);

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

    if (props.timeLeft === null) {
      this.setTimer();
    } else if (props.session !== this.state.currentSession) {
      this.setState({ currentSession: props.session }, this.setTimer);
    }
  }

  setTimer() {
    const seconds =
      !this.props.pauseAtSessionEnd && !this.props.isPaused ? 0.8 : 0;

    if (this.props.session === 'focus') {
      this.props.setTimer(this.props.focusTime, seconds);
    } else if (this.props.session === 'shortBreak') {
      this.props.setTimer(this.props.shortBreakTime, seconds);
    } else {
      this.props.setTimer(this.props.longBreakTime, seconds);
    }
  }

  finishTimer() {
    if (this.props.pauseAtSessionEnd) this.props.togglePaused();
    if (this.props.soundIsEnabled) {
      this.props.toggleSoundPlaying();
    }
    this.setState({ finishedInBackground: false }, this.props.finishSession);
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
