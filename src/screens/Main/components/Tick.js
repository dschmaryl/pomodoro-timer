import React from 'react';
import Video from 'react-native-video';

import { tickSounds } from '../../../sounds';

export class Tick extends React.PureComponent {
  state = { muteTicks: true, appState: 'active', seconds: 0 };

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.playTicks) {
      if (nextProps.appState === prevState.appState) {
        if (nextProps.seconds !== prevState.seconds) {
          if (prevState.muteTicks) {
            return {
              ...prevState,
              muteTicks: false,
              seconds: nextProps.seconds
            };
          } else {
            return { ...prevState, seconds: nextProps.seconds };
          }
        }
      } else {
        if (nextProps.appState === 'active') {
          return {
            muteTicks: true,
            appState: 'active',
            seconds: nextProps.seconds
          };
        } else {
          return {
            muteTicks: false,
            appState: nextProps.appState,
            seconds: nextProps.seconds
          };
        }
      }
    } else {
      if (!prevState.muteTicks) {
        return { ...prevState, muteTicks: true };
      }
    }
    return null;
  };

  render = () =>
    !this.props.playTicks ? null : (
      <Video
        key={this.state.seconds}
        source={tickSounds[this.props.tickSoundIndex].soundFile}
        volume={this.state.muteTicks ? 0 : this.props.tickVolume / 100}
      />
    );
}
