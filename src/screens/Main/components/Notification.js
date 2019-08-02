import React from 'react';
import PushNotification from 'react-native-push-notification';

export class Notification extends React.Component {
  state = { isScheduled: false };

  componentWillReceiveProps = newProps => {
    if (
      newProps.sendNotification &&
      !this.state.isScheduled &&
      !this.props.isPaused
    ) {
      this.setState({ isScheduled: true }, () => {
        // console.log('scheduling push notification');
        PushNotification.localNotificationSchedule({
          id: '31415',
          title: 'Pomodoro Timer',
          message: newProps.sessionString + ' time is up!',
          date: new Date(this.props.endTime),
          vibrate: true,
          vibration: 300,
          soundName: 'ding_once.mpg',
          smallIcon: 'ic_launcher',
          color: 'red'
        });
      });
    } else if (!newProps.sendNotification && this.state.isScheduled) {
      // console.log('canceling push notification');
      PushNotification.cancelLocalNotifications({ id: '31415' });
      this.setState({ isScheduled: false });
    }
  };

  render = () => null;
}
