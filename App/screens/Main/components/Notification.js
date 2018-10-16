import React from 'react';
import { AppState } from 'react-native';
import PushNotification from 'react-native-push-notification';

export class Notification extends React.Component {
  constructor() {
    super();
    this.state = { appState: AppState.currentState };
  }

  componentDidMount() {
    PushNotification.configure({
      onNotification: () => this.props.toggleNotificationClicked()
    });
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange = nextAppState => {
    if (nextAppState === 'active' && this.props.notificationIsScheduled) {
      console.log('canceling push notification');
      PushNotification.cancelLocalNotifications({ id: '31415' });
      this.props.toggleNotificationScheduled();
    } else if (
      nextAppState === 'background' &&
      !this.props.isPaused &&
      this.props.notificationIsEnabled &&
      !this.props.notificationIsScheduled
    ) {
      console.log('scheduling push notification');
      PushNotification.localNotificationSchedule({
        id: '31415',
        title: 'Pomodoro Timer',
        message: this.props.sessionString + ' time is up!',
        date: new Date(this.props.endTime),
        // soundName: alarm.mp3,
        color: 'red'
      });
      this.props.toggleNotificationScheduled();
    }
    this.setState({ appState: nextAppState });
  };

  render() {
    return null;
  }
}
