import React from 'react';
import { View } from 'react-native';

import MenuButton from '../containers/MenuButton';
import Session from '../containers/Session';
import Time from '../containers/Time';
import StartButton from '../containers/StartButton';
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
      currentSession: props.session
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

    if (!props.isPaused && props.soundIsPlaying)
      this.props.toggleSoundPlaying();
  }

  setTimer() {
    const seconds =
      !this.props.pauseAtSessionEnd && !this.props.isPaused ? 0.8 : 0;

    if (this.props.session === 'work') {
      this.props.setTimer(this.props.workTime, seconds);
    } else if (this.props.session === 'shortBreak') {
      this.props.setTimer(this.props.shortBreakTime, seconds);
    } else {
      this.props.setTimer(this.props.longBreakTime, seconds);
    }
  }

  finishTimer() {
    if (this.props.pauseAtSessionEnd) this.props.togglePaused();
    // this.props.toggleSoundPlaying();
    this.props.finishSession();
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
      <View style={[styles.timerContainer, this.props.colors.backgroundColor]}>
        <MenuButton />
        <Session />
        <Time />
        <StartButton />
        <Alarm />
        <ScreenAwake />
        <Notification />
      </View>
    );
    // }
  }
}
