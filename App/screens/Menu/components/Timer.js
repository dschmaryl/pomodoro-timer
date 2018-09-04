import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

export const Timer = ({
  session,
  timeLeft,
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
    setTimer(getMinutes());
  };

  const minutes = Math.floor(timeLeft / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);

  return (
    <View style={[styles.rowView, colors.borderColor]}>
      <TouchableNativeFeedback onPress={() => onResetPress()}>
        <View style={styles.buttonView}>
          <Icon
            name="md-refresh"
            style={[styles.iconStyle, colors.iconButtonColor]}
          />
        </View>
      </TouchableNativeFeedback>
      <View>
        <Text style={[styles.timerText, colors.textColor]}>
          {minutes}:{seconds < 10 ? '0' + seconds : seconds}
        </Text>
      </View>
      <TouchableNativeFeedback onPress={togglePaused}>
        <View style={styles.buttonView}>
          {isPaused ? (
            <Icon
              name="md-play"
              style={[styles.iconStyle, colors.iconButtonColor]}
            />
          ) : (
            <Icon
              name="md-pause"
              style={[styles.iconStyle, colors.iconButtonColor]}
            />
          )}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};
