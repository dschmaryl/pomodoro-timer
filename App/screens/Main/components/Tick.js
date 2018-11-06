import React from 'react';
import Sound from 'react-native-sound';

export class Tick extends React.Component {
  state = { tickVolume: null, seconds: null, muteTick: false };

  tick = new Sound('sixtymin.mp3', null, error => {
    if (error) {
      console.log('tick sound error: ', error);
      return;
    }
  });

  componentDidMount = () => {
    this.setState({
      tickVolume: this.props.tickVolume,
      seconds: this.props.seconds
    });
    this.tick.setVolume(this.props.tickVolume / 100);
  };

  componentWillReceiveProps = newProps => {
    if (newProps.tickVolume !== this.state.tickVolume) {
      this.setState({ tickVolume: newProps.tickVolume });
      this.tick.setVolume(newProps.tickVolume / 100);
    }

    if (newProps.appState !== 'active') this.setState({ muteTick: true });

    if (newProps.playTicks && this.state.seconds !== newProps.seconds) {
      if (this.state.seconds === null) {
        this.tick.play();
      } else if (!this.state.muteTick) {
        this.tick.play();
      }
      this.setState({ seconds: newProps.seconds, muteTick: false });
    }
  };

  render = () => null;
}
