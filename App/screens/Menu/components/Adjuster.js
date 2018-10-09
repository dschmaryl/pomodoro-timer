import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

export const Adjuster = ({ label, value, valueLabel, onPress, colors }) => {
  return (
    <TouchableNativeFeedback onPress={() => onPress(value)}>
      <View style={[styles.rowView, colors.borderColor]}>
        <Text style={[styles.rowText, colors.textColor]}>{label}:</Text>
        <View style={styles.adjusterView}>
          <View style={styles.adjusterValueView}>
            <Text style={[styles.rowText, colors.textColor]}>
              {value}
              {valueLabel ? ' ' + valueLabel : ''}
            </Text>
          </View>

          <View style={styles.touchable}>
            <Icon
              name="md-arrow-dropup"
              style={[styles.iconStyle, colors.buttonColor]}
            />
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};
