import React from 'react';
import Sound from 'react-native-sound';

export class Alarm extends React.Component {
  sound = new Sound('alarm.mp3', null, error => {
    if (error) {
      console.log('sound error: ', error);
      return;
    }
  });

  componentWillReceiveProps = newProps => {
    if (newProps.volume !== this.sound.getVolume() / 100)
      this.sound.setVolume(newProps.alarmVolume / 100);

    if (newProps.alarmIsPlaying) {
      this.sound.play(() => {
        this.props.toggleAlarmPlaying();
      });
    } else if (!newProps.alarmIsPlaying) {
      this.sound.stop();
    }
  };

  componentWillUnmount = () => this.sound.stop();

  render = () => null;
}
