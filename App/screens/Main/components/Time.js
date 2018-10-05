import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export const Time = ({ minutes, seconds, colors }) => (
  <View style={styles.timerTimeView}>
    <Text style={[styles.timerTimeText, colors.textColor]}>
      {minutes}:{seconds < 10 ? '0' + seconds : seconds}
    </Text>
  </View>
);
