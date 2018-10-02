import React from 'react';
import { View } from 'react-native';
import PushNotification from 'react-native-push-notification';

import MenuButton from '../containers/MenuButton';
import Session from '../containers/Session';
import Time from '../containers/Time';
import StartButton from '../containers/StartButton';
import Alarm from '../containers/Alarm';
import ScreenAwake from '../containers/ScreenAwake';

import { styles } from './styles';

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: null,
      isPaused: true,
      currentSession: props.session,
      notificationScheduled: false
    };
  }

  componentDidMount() {
    this.checkTimer(this.props);
    this.props.navigation.addListener('didFocus', () =>
      this.cancelNotification()
    );
    this.props.navigation.addListener('didBlur', () =>
      this.scheduleNotification()
    );
  }

  componentWillReceiveProps(newProps) {
    this.checkTimer(newProps);
  }

  componentWillUnmount() {
    this.setState({ interval: clearInterval(this.state.interval) });
    // if (this.props.soundIsPlaying) this.props.toggleSoundPlaying();
  }

  checkTimer(props) {
    if (this.props.timeLeft === null) {
      this.setTimer();
    } else if (props.session !== this.state.currentSession) {
      this.setState({ currentSession: props.session }, this.setTimer);
    } else if (props.isFinished) {
      this.props.finishSession();
      this.props.toggleSoundPlaying();
    }

    if (!props.isPaused && this.state.isPaused) {
      this.setState({
        interval: setInterval(this.props.timerTick, 10),
        isPaused: false
      });
    } else if (props.isPaused && !this.state.isPaused) {
      this.setState({
        interval: clearInterval(this.state.interval),
        isPaused: true
      });
    }

    if (!props.isPaused && props.soundIsPlaying)
      this.props.toggleSoundPlaying();
  }

  setTimer() {
    if (this.props.session === 'work') {
      this.props.setTimer(this.props.workTime);
    } else if (this.props.session === 'shortBreak') {
      this.props.setTimer(this.props.shortBreakTime);
    } else {
      this.props.setTimer(this.props.longBreakTime);
    }
  }

  scheduleNotification() {
    if (!this.state.notificationScheduled && !this.props.isPaused) {
      PushNotification.localNotificationSchedule({
        id: '31415',
        title: 'Pomodoro Timer',
        message: this.props.sessionString + ' time is up!',
        date: new Date(this.props.endTime),
        color: 'red'
      });
      this.setState({ notificationScheduled: true });
    }
  }

  cancelNotification() {
    if (this.state.notificationScheduled) {
      PushNotification.cancelLocalNotifications({ id: '31415' });
      this.setState({ notificationScheduled: false });
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
      </View>
    );
    // }
  }
}
