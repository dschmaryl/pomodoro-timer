import React from 'react';
import PushNotification from 'react-native-push-notification';

export class Notification extends React.Component {
  state = { isScheduled: false };

  static getDerivedStateFromProps = (newProps, prevState) => {
    if (newProps.sendNotification && !prevState.isScheduled) {
      // console.log('scheduling push notification');
      PushNotification.localNotificationSchedule({
        id: '31415',
        title: 'Pomodoro Timer',
        message: newProps.sessionString + ' time is up!',
        date: new Date(newProps.endTime),
        vibrate: true,
        vibration: 300,
        soundName: 'ding_once.mpg',
        smallIcon: 'ic_launcher',
        color: 'red'
      });
      return { isScheduled: true };
    } else if (!newProps.sendNotification) {
      // console.log('canceling push notification');
      PushNotification.cancelLocalNotifications({ id: '31415' });

      return { isScheduled: false };
    }
  };

  render = () => null;
}
