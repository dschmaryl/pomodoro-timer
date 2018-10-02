import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Button } from './Button';

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
    <Button
      onPress={() => {
        backOneSession();
        resetTimer();
      }}
    >
      <Icon
        name="md-skip-backward"
        style={[styles.iconStyle, colors.buttonColor]}
      />
    </Button>
    <View>
      <Text style={[styles.rowText, colors.textColor]}>
        Pomodoro #{pomodoro} - {sessionString}
      </Text>
    </View>
    <Button
      onPress={() => {
        finishSession();
        resetTimer();
      }}
    >
      <Icon
        name="md-skip-forward"
        style={[styles.iconStyle, colors.buttonColor]}
      />
    </Button>
  </View>
);
