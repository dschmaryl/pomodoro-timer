import React from 'react';
import Video from 'react-native-video';

import { tickSounds } from '../../../sounds';

export class Tick extends React.PureComponent {
  state = {
    muteTicks: true,
    tickSoundIndex: 0,
    tickVolume: 50,
    appState: 'active',
    seconds: 0
  };

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.playTicks) {
      if (nextProps.appState === prevState.appState) {
        if (nextProps.seconds !== prevState.seconds) {
          if (prevState.muteTicks) {
            return { ...nextProps, muteTicks: false };
          } else {
            return { ...nextProps };
          }
        }
      } else {
        if (nextProps.appState === 'active') {
          return { ...nextProps, muteTicks: true };
        } else {
          return { ...nextProps, muteTicks: false };
        }
      }
    } else {
      if (!prevState.muteTicks) {
        return { ...nextProps, muteTicks: true };
      }
    }
    return null;
  };

  render = () =>
    this.state.muteTicks ? null : (
      <Video
        key={this.state.seconds}
        source={tickSounds[this.state.tickSoundIndex].soundFile}
        volume={this.state.muteTicks ? 0 : this.state.tickVolume / 100}
      />
    );
}
