import React from 'react';
import { AppState, View } from 'react-native';
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
      appState: AppState.currentState,
      notificationScheduled: false
    };
  }

  componentDidMount() {
    this.checkTimer(this.props);
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillReceiveProps(newProps) {
    this.checkTimer(newProps);
  }

  componentWillUnmount() {
    this.setState({ interval: clearInterval(this.state.interval) });
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  checkTimer(props) {
    if (props.timeLeft === null) {
      this.setTimer();
    } else if (props.session !== this.state.currentSession) {
      this.setState({ currentSession: props.session }, this.setTimer);
    } else if (props.isFinished) {
      // if (this.state.appState === 'active') this.props.toggleSoundPlaying();
      this.props.finishSession();
    }

    if (!props.isPaused && this.state.isPaused) {
      this.setState({
        interval: setInterval(this.props.timerTick, 10),
        isPaused: false
      });
    } else if (props.isPaused && !this.state.isPaused) {
      if (this.appState === 'active') this.props.toggleSoundPlaying();
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

  handleAppStateChange = nextAppState => {
    if (nextAppState === 'active' && this.state.notificationScheduled) {
      console.log('canceling push notification');
      PushNotification.cancelLocalNotifications({ id: '31415' });
      this.setState({ notificationScheduled: false, appState: nextAppState });
    } else if (
      nextAppState === 'background' &&
      !this.state.notificationScheduled
    ) {
      if (!this.props.isPaused) {
        console.log('scheduling push notification');
        PushNotification.localNotificationSchedule({
          id: '31415',
          title: 'Pomodoro Timer',
          message: this.props.sessionString + ' time is up!',
          date: new Date(this.props.endTime),
          color: 'red'
        });
        this.setState({ notificationScheduled: true, appState: nextAppState });
      }
    }
  };

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
