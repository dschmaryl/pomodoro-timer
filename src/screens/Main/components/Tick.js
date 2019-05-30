import React from 'react';
import Video from 'react-native-video';

import { tickSounds } from '../../../sounds';

export const Tick = ({ playTicks, seconds, tickVolume }) =>
  !playTicks ? null : (
    <Video
      key={seconds}
      source={tickSounds[0].soundFile}
      volume={tickVolume / 100}
    />
  );
