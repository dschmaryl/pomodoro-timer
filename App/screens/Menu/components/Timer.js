import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Button } from './Button';

import { styles } from './styles';

export const Timer = ({
  session,
  minutes,
  seconds,
  isPaused,
  workTime,
  shortBreakTime,
  longBreakTime,
  soundIsPlaying,
  colors,
  setTimer,
  togglePaused,
  toggleSoundPlaying
}) => {
  const onResetPress = () => {
    if (!isPaused) togglePaused();
    if (soundIsPlaying) toggleSoundPlaying();
    const getMinutes = () => {
      if (session === 'work') {
        return workTime;
      } else if (session === 'shortBreak') {
        return shortBreakTime;
      } else {
        return longBreakTime;
      }
    };
    setTimer(getMinutes(), 0);
  };

  return (
    <View style={[styles.rowView, colors.borderColor]}>
      <Button onPress={onResetPress}>
        <Icon
          name="md-refresh"
          style={[styles.iconStyle, colors.buttonColor]}
        />
      </Button>
      <View>
        <Text style={[styles.timerText, colors.textColor]}>
          {minutes}:{seconds < 10 ? '0' + seconds : seconds}
        </Text>
      </View>
      <Button onPress={togglePaused}>
        {isPaused ? (
          <Icon name="md-play" style={[styles.iconStyle, colors.buttonColor]} />
        ) : (
          <Icon
            name="md-pause"
            style={[styles.iconStyle, colors.buttonColor]}
          />
        )}
      </Button>
    </View>
  );
};
