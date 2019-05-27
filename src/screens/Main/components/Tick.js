import React from 'react';
import Video from 'react-native-video';

import { tickSounds } from '../../../sounds';

export class Tick extends React.Component {
  state = { seconds: null, muteTick: true };

  componentWillReceiveProps = newProps => {
    if (newProps.playTicks) {
      if (newProps.appState !== 'active') {
        this.setState({ muteTick: true });
      } else if (this.state.muteTick) {
        setTimeout(() => this.setState({ muteTick: false }), 500);
      }
    } else {
      this.setState({ muteTick: true });
    }
  };

  render = () =>
    !this.props.playTicks ? null : (
      <Video
        key={this.props.seconds}
        muted={this.state.muteTick}
        source={tickSounds[0].soundFile}
        volume={this.props.tickVolume / 100}
      />
    );
}
