import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Button } from './Button';

import { styles } from './styles';

export const Timer = ({
  minutes,
  seconds,
  isPaused,
  alarmIsPlaying,
  colors,
  resetTime,
  togglePaused,
  toggleAlarmPlaying
}) => (
  <View style={[styles.rowView, colors.borderColor]}>
    <Button onPress={resetTime}>
      <Icon name="md-refresh" style={[styles.iconStyle, colors.buttonColor]} />
    </Button>
    <View>
      <Text style={[styles.timerText, colors.textColor]}>
        {minutes < 10 ? ' ' + minutes : minutes}:
        {seconds < 10 ? '0' + seconds : seconds}
      </Text>
    </View>
    <Button onPress={toggleAlarmPlaying} disabled={!alarmIsPlaying}>
      {alarmIsPlaying ? (
        <Icon
          name="md-volume-off"
          style={[styles.iconStyle, colors.buttonColor]}
        />
      ) : null}
    </Button>
    <Button onPress={togglePaused}>
      {isPaused ? (
        <Icon name="md-play" style={[styles.iconStyle, colors.buttonColor]} />
      ) : (
        <Icon name="md-pause" style={[styles.iconStyle, colors.buttonColor]} />
      )}
    </Button>
  </View>
);
