import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

export const Timer = props => {
  const onResetPress = () => {
    if (!props.isPaused) props.togglePaused();
    const getMinutes = () => {
      if (props.session === 'work') {
        return props.workTime;
      } else if (props.session === 'shortBreak') {
        return props.shortBreakTime;
      } else {
        return props.longBreakTime;
      }
    };
    props.setTimer(getMinutes());
  };

  const { colors } = props;
  const minutes = Math.floor(props.timeLeft / 60000);
  const seconds = Math.floor((props.timeLeft % 60000) / 1000);

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
      <TouchableNativeFeedback onPress={props.togglePaused}>
        <View style={styles.buttonView}>
          {props.isPaused ? (
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
