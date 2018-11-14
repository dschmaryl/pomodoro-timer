import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Button } from './Button';
import Time from '../../Main/containers/Time';

import { styles } from './styles';

export const Timer = ({
  isPaused,
  alarmIsPlaying,
  colors,
  resetTime,
  togglePaused,
  toggleAlarmPlaying
}) => (
  <View style={[styles.rowView, colors.borderColor]}>
    <View style={styles.timerSideContainer}>
      <Button onPress={resetTime}>
        <Icon
          name="md-refresh"
          style={[styles.iconStyle, colors.buttonColor]}
        />
      </Button>
    </View>
    <View style={styles.timerCenterContainer}>
      <Time textStyle={styles.timeText} />
    </View>
    <View style={styles.timerSideContainer}>
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
          <Icon
            name="md-pause"
            style={[styles.iconStyle, colors.buttonColor]}
          />
        )}
      </Button>
    </View>
  </View>
);
