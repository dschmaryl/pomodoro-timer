import React from 'react';
import KeepAwake from 'react-native-keep-awake';

export const ScreenAwake = ({ keepScreenAwake, isPaused, alarmIsPlaying }) =>
  keepScreenAwake && (!isPaused || alarmIsPlaying) ? <KeepAwake /> : null;
