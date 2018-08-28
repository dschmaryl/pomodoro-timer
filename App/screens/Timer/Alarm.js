import React from 'react';
import Sound from 'react-native-sound';

export class Alarm extends React.Component {
  constructor(props) {
    super(props);
    this.sound = new Sound('alarm.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('sound error: ', error);
        return;
      }
      console.log('loaded sound');
    });
  }

  componentDidMount() {
    console.log('alarm component mounted');

    this.sound.setVolume(this.props.volume / 100).setNumberOfLoops(-1);

    if (this.props.soundIsEnabled && this.props.soundIsPlaying) {
      this.sound.play();
    } else {
      this.sound.stop();
    }
  }

  componentWillReceiveProps(newProps) {
    console.log('alarm component received props');

    if (newProps.volume !== this.sound.getVolume() / 100)
      this.sound.setVolume(newProps.volume / 100);

    if (newProps.soundIsEnabled && newProps.soundIsPlaying) {
      this.sound.play();
    } else {
      this.sound.stop();
    }
  }

  componentWillUnmount() {
    console.log('alarm component will unmount');

    this.sound.stop();
  }

  render() {
    return null;
  }
}
