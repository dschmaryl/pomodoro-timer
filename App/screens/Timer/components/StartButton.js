import React from 'react';
import { TouchableNativeFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

export const StartButton = ({ isPaused, colors, togglePaused }) => (
  <TouchableNativeFeedback onPress={togglePaused}>
    <View style={styles.playIconView}>
      {isPaused ? (
        <Icon
          name="md-play"
          style={[styles.playIconStyle, colors.buttonColor]}
        />
      ) : (
        <Icon
          name="md-pause"
          style={[styles.playIconStyle, colors.buttonColor]}
        />
      )}
    </View>
  </TouchableNativeFeedback>
);
