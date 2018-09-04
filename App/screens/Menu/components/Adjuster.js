import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

export const Adjuster = ({ label, time, onDecrease, onIncrease, colors }) => (
  <View style={[styles.rowView, colors.borderColor]}>
    <Text style={[styles.rowText, colors.textColor]}>{label}:</Text>
    <View style={styles.adjusterView}>
      <TouchableNativeFeedback onPress={() => onDecrease()}>
        <View style={styles.buttonView}>
          <Icon
            name="md-arrow-down"
            style={[styles.iconStyle, colors.iconButtonColor]}
          />
        </View>
      </TouchableNativeFeedback>
      <Text style={[styles.rowText, colors.textColor]}>{time}</Text>
      <TouchableNativeFeedback onPress={() => onIncrease()}>
        <View style={styles.buttonView}>
          <Icon
            name="md-arrow-up"
            style={[styles.iconStyle, colors.iconButtonColor]}
          />
        </View>
      </TouchableNativeFeedback>
    </View>
  </View>
);
