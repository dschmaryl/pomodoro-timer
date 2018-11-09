import React from 'react';
import Sound from 'react-native-sound';

import { sounds } from '../../../sounds';

export class Tick extends React.Component {
  state = {
    tickVolume: null,
    tickSoundIndex: null,
    seconds: null,
    muteTick: false
  };

  ticks = sounds.tickSounds.map(
    tickSound =>
      new Sound(tickSound.soundFile, null, error => {
        if (error) {
          console.log('tick sound error: ', error);
          return;
        }
      })
  );

  componentDidMount = () => {
    this.setState({
      tickVolume: this.props.tickVolume,
      tickSoundIndex: this.props.tickSoundIndex,
      seconds: this.props.seconds
    });
    this.ticks[this.props.tickSoundIndex].setVolume(
      this.props.tickVolume / 100
    );
  };

  componentWillReceiveProps = newProps => {
    if (newProps.tickVolume !== this.state.tickVolume) {
      this.setState({ tickVolume: newProps.tickVolume });
      this.ticks[newProps.tickSoundIndex].setVolume(newProps.tickVolume / 100);
    }

    if (newProps.playTicks) {
      if (newProps.appState !== 'active') {
        // left app, mute first tick on return to prevent quick ticks
        this.setState({ muteTick: true });
      } else {
        if (this.state.seconds !== newProps.seconds) {
          if (!this.state.muteTick) {
            this.ticks[newProps.tickSoundIndex].play();
          }
          this.setState({ seconds: newProps.seconds, muteTick: false });
        }
      }
    }
  };

  render = () => null;
}
