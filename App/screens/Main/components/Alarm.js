import React from 'react';
import Sound from 'react-native-sound';

export class Alarm extends React.Component {
  constructor(props) {
    super(props);
    this.sound = new Sound('alarm.mp3', null, error => {
      if (error) {
        console.log('sound error: ', error);
        return;
      }
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.volume !== this.sound.getVolume() / 100)
      this.sound.setVolume(newProps.volume / 100);

    if (newProps.soundIsPlaying) {
      console.log('playing sound');
      this.sound.play();
    } else {
      console.log('stopping sound');
      this.sound.stop();
    }
  }

  componentWillUnmount() {
    this.sound.stop();
  }

  render() {
    return null;
  }
}
