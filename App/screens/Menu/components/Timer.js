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
  focusTime,
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
      if (session === 'focus') {
        return focusTime;
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
          {minutes < 10 ? ' ' + minutes : minutes}:
          {seconds < 10 ? '0' + seconds : seconds}
        </Text>
      </View>
      <Button onPress={toggleSoundPlaying} disabled={!soundIsPlaying}>
        {soundIsPlaying ? (
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
          <Icon
            name="md-pause"
            style={[styles.iconStyle, colors.buttonColor]}
          />
        )}
      </Button>
    </View>
  );
};
