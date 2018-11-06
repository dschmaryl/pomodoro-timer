import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

export const Adjuster = ({
  label,
  value,
  valueLabel,
  onPress,
  disabled,
  colors
}) => {
  const textColor = disabled ? colors.disabledColor : colors.textColor;
  const buttonColor = disabled ? colors.disabledColor : colors.buttonColor;

  return (
    <TouchableNativeFeedback disabled={disabled} onPress={() => onPress(value)}>
      <View style={[styles.rowView, colors.borderColor]}>
        <Text style={[styles.rowText, textColor]}>{label}:</Text>
        <View style={styles.adjusterView}>
          <View style={styles.adjusterValueView}>
            <Text style={[styles.rowText, textColor]}>
              {value}
              {valueLabel ? ' ' + valueLabel : ''}
            </Text>
          </View>

          <View style={styles.touchable}>
            <Icon
              name="md-arrow-dropup"
              style={[styles.iconStyle, buttonColor]}
            />
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};
