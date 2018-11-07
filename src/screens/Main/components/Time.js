import React from 'react';
import { Text } from 'react-native';

export const Time = ({ minutes, seconds, colors, textStyle }) => (
  <Text style={[textStyle, colors.textColor]}>
    {minutes}:{seconds < 10 ? '0' + seconds : seconds}
  </Text>
);
