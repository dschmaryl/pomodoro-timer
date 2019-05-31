import React from 'react';
import PushNotification from 'react-native-push-notification';

export class Notification extends React.Component {
  state = { isScheduled: false };

  componentWillReceiveProps = newProps => {
    if (newProps.sendNotification && !this.state.isScheduled) {
      this.setState({ isScheduled: true }, () => {
        console.log('scheduling push notification');
        PushNotification.localNotificationSchedule({
          id: '31415',
          title: 'Pomodoro Timer',
          message: newProps.sessionString + ' time is up!',
          date: new Date(Date.now()),
          vibrate: true,
          vibration: 300,
          soundName: 'ding_once.mpg',
          smallIcon: 'ic_launcher',
          color: 'red'
        });
        this.props.toggleSessionEnded();
      });
    }
  };

  render = () => null;
}
