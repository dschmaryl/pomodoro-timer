import React from 'react';
import Video from 'react-native-video';

import { alarmSounds } from '../../../sounds';

export const Alarm = ({
  alarmSoundIndex,
  alarmVolume,
  alarmIsPlaying,
  alarmRepeat,
  toggleSessionEnded
}) =>
  !alarmIsPlaying ? null : (
    <Video
      source={alarmSounds[alarmSoundIndex].soundFile}
      volume={alarmVolume / 100}
      repeat={alarmRepeat}
      onEnd={alarmRepeat ? () => {} : toggleSessionEnded}
    />
  );
