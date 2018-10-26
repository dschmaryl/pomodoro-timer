import React from 'react';
import Sound from 'react-native-sound';

export class Alarm extends React.Component {
  alarm = new Sound('alarm.mp3', null, error => {
    if (error) {
      console.log('alarm sound error: ', error);
      return;
    }
  });

  componentWillReceiveProps = newProps => {
    if (newProps.volume !== this.alarm.getVolume() / 100)
      this.alarm.setVolume(newProps.alarmVolume / 100);

    if (newProps.alarmIsPlaying) {
      this.alarm.play(() => {
        this.props.toggleAlarmPlaying();
      });
    } else if (!newProps.alarmIsPlaying) {
      this.alarm.stop();
    }
  };

  componentWillUnmount = () => this.alarm.stop();

  render = () => null;
}
