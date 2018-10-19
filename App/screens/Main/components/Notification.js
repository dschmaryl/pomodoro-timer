import React from 'react';
import { AppState } from 'react-native';
import PushNotification from 'react-native-push-notification';

export class Notification extends React.Component {
  constructor() {
    super();
    this.state = {
      appState: AppState.currentState,
      notificationIsScheduled: false
    };
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange = nextAppState => {
    if (nextAppState === 'active' && this.state.notificationIsScheduled) {
      console.log('canceling push notification');
      PushNotification.cancelLocalNotifications({ id: '31415' });
      this.setState({ notificationIsScheduled: false });
    } else if (
      nextAppState === 'background' &&
      !this.props.isPaused &&
      this.props.notificationIsEnabled &&
      !this.state.notificationIsScheduled
    ) {
      console.log('scheduling push notification');
      PushNotification.localNotificationSchedule({
        id: '31415',
        title: 'Pomodoro Timer',
        message: this.props.sessionString + ' time is up!',
        date: new Date(this.props.endTime),
        vibrate: false,
        // soundName: alarm.mp3,
        // smallIcon: 'ic_launcher',
        color: 'red'
      });
      this.setState({ notificationIsScheduled: true });
    }
    this.setState({ appState: nextAppState });
  };

  render() {
    return null;
  }
}
