import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export const Session = ({ sessionString, colors }) => (
  <View style={styles.sessionView}>
    <Text style={[styles.sessionText, colors.textColor]}>
      {sessionString}
    </Text>
  </View>
);
