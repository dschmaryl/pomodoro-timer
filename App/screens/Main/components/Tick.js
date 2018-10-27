import React from 'react';
import Sound from 'react-native-sound';

export class Tick extends React.Component {
  state = { volume: 50, seconds: null };

  tick = new Sound('tick.mp3', null, error => {
    if (error) {
      console.log('tick sound error: ', error);
      return;
    }
  });

  componentWillReceiveProps = newProps => {
    if (newProps.volume !== this.state.volume)
      this.setState({ volume: newProps.volume }, () =>
        this.tick.setVolume(newProps.tickVolume / 100)
      );

    if (newProps.seconds !== this.state.seconds && newProps.tickIsEnabled) {
      this.tick.play();
      this.setState({ seconds: newProps.seconds });
    }
  };

  componentWillUnmount = () => this.tick.stop();

  render = () => null;
}
