import React from 'react';
import KeepAwake from 'react-native-keep-awake';

export const ScreenAwake = ({ keepScreenAwake, isPaused, soundIsPlaying }) =>
  keepScreenAwake && (!isPaused || soundIsPlaying) ? <KeepAwake /> : null;
