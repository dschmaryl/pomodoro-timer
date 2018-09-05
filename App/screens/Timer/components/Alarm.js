import React from 'react';
import Sound from 'react-native-sound';

export class Alarm extends React.Component {
  constructor() {
    super();
    this.sound = new Sound('alarm.mp3', null, error => {
      if (error) {
        console.log('sound error: ', error);
        return;
      }
      this.sound.setNumberOfLoops(-1);
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.volume !== this.sound.getVolume() / 100)
      this.sound.setVolume(newProps.volume / 100);

    if (newProps.soundIsEnabled && newProps.soundIsPlaying) {
      this.sound.play();
    } else {
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
