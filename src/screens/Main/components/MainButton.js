import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

export const MainButton = ({
  isPaused,
  togglePaused,
  alarmIsPlaying,
  toggleAlarmIsPlaying,
  showPauseButton,
  colors
}) =>
  isPaused ? (
    <TouchableOpacity onPress={togglePaused} style={styles.mainButtonTouchable}>
      <Icon
        name="md-play"
        style={[styles.mainButtonIcon, colors.buttonColor]}
      />
    </TouchableOpacity>
  ) : alarmIsPlaying ? (
    <TouchableOpacity
      onPress={toggleAlarmIsPlaying}
      style={styles.mainButtonTouchable}
    >
      <Icon
        name="md-volume-off"
        style={[styles.mainButtonIcon, colors.buttonColor]}
      />
    </TouchableOpacity>
  ) : showPauseButton ? (
    <TouchableOpacity onPress={togglePaused} style={styles.mainButtonTouchable}>
      <Icon
        name="md-pause"
        style={[styles.mainButtonIcon, colors.buttonColor]}
      />
    </TouchableOpacity>
  ) : (
    <View style={styles.mainButtonTouchable} />
  );
