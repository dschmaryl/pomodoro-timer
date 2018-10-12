import React from 'react';
import { AppState } from 'react-native';
import PushNotification from 'react-native-push-notification';

export class Notification extends React.Component {
  constructor() {
    super();
    this.state = {
      appState: AppState.currentState,
      notificationScheduled: false
    };
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
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
    return null
  }
}
