import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

export const MainButton = ({
  isPaused,
  togglePaused,
  soundIsPlaying,
  toggleSoundPlaying,
  colors
}) =>
  isPaused ? (
    <TouchableOpacity
      onPress={() => {
        togglePaused();
        if (soundIsPlaying) toggleSoundPlaying();
      }}
      style={styles.playTouchable}
    >
      <Icon name="md-play" style={[styles.icon, colors.buttonColor]} />
    </TouchableOpacity>
  ) : soundIsPlaying ? (
    <TouchableOpacity onPress={toggleSoundPlaying} style={styles.playTouchable}>
      <Icon name="md-volume-off" style={[styles.icon, colors.buttonColor]} />
    </TouchableOpacity>
  ) : (
    <View style={styles.playTouchable} />
  );
