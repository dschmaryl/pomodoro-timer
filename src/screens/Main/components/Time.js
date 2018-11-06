import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

export const Time = ({ minutes, seconds, colors }) => (
  <Text style={[styles.timerText, colors.textColor]}>
    {minutes}:{seconds < 10 ? '0' + seconds : seconds}
  </Text>
);
