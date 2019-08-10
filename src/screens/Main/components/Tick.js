import React from 'react';
import Video from 'react-native-video';

import { tickSounds } from '../../../sounds';

export const Tick = ({ tickVolume, tickSoundIndex, playTicks, seconds }) =>
  !playTicks ? null : (
    <Video
      key={seconds}
      source={tickSounds[tickSoundIndex].soundFile}
      volume={tickVolume / 100}
    />
  );
