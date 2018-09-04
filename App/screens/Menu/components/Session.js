import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

export const Session = ({
  pomodoro,
  sessionString,
  resetTimer,
  finishSession,
  backOneSession,
  colors
}) => (
  <View style={[styles.rowView, colors.borderColor]}>
    <TouchableNativeFeedback
      onPress={() => {
        backOneSession();
        resetTimer();
      }}
    >
      <View style={styles.buttonView}>
        <Icon
          name="md-skip-backward"
          style={[styles.iconStyle, colors.iconButtonColor]}
        />
      </View>
    </TouchableNativeFeedback>
    <View>
      <Text style={[styles.rowText, colors.textColor]}>
        Pomodoro #{pomodoro} - {sessionString}
      </Text>
    </View>
    <TouchableNativeFeedback
      onPress={() => {
        finishSession();
        resetTimer();
      }}
    >
      <View style={styles.buttonView}>
        <Icon
          name="md-skip-forward"
          style={[styles.iconStyle, colors.iconButtonColor]}
        />
      </View>
    </TouchableNativeFeedback>
  </View>
);
