import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

export const StartButton = ({ isPaused, colors, togglePaused }) => (
  <TouchableOpacity onPress={togglePaused} style={styles.playTouchable}>
    {isPaused ? (
      <Icon name="md-play" style={[styles.icon, colors.buttonColor]} />
    ) : (
      <Icon name="md-pause" style={[styles.icon, colors.buttonColor]} />
    )}
  </TouchableOpacity>
);
