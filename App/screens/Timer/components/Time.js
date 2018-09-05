import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export const Time = ({ timeLeft, colors }) => {
  const minutes = Math.floor(timeLeft / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);

  return (
    <View style={styles.timerTimeView}>
      <Text style={[styles.timerTimeText, colors.textColor]}>
        {minutes}:{seconds < 10 ? '0' + seconds : seconds}
      </Text>
    </View>
  );
};
