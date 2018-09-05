import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export const Session = ({ sessionString, colors }) => (
  <View style={styles.timerHeaderView}>
    <Text style={[styles.timerHeaderText, colors.textColor]}>
      {sessionString}
    </Text>
  </View>
);
