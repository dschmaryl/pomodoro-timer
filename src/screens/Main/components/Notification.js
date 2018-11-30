import React from 'react';
import PushNotification from 'react-native-push-notification';

export class Notification extends React.Component {
  state = { isScheduled: false };

  componentWillReceiveProps = newProps => {
    if (newProps.appState === 'active' && this.state.isScheduled) {
      console.log('canceling push notification');
      PushNotification.cancelLocalNotifications({ id: '31415' });
      this.setState({ isScheduled: false });
    } else if (
      newProps.appState !== 'active' &&
      !newProps.isPaused &&
      newProps.notificationIsEnabled
    ) {
      console.log('scheduling push notification');
      PushNotification.localNotificationSchedule({
        id: '31415',
        title: 'Pomodoro Timer',
        message: newProps.sessionString + ' time is up!',
        date: new Date(newProps.endTime),
        vibrate: true,
        vibration: 300,
        soundName: 'ding_once.wav',
        smallIcon: 'ic_launcher',
        color: 'red'
      });
      this.setState({ isScheduled: true });
    }
  };

  render = () => null;
}
