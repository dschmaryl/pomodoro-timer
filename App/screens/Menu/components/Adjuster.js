import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Button } from './Button';

import { styles } from './styles';

export const Adjuster = ({
  label,
  value,
  valueLabel,
  onDecrease,
  onIncrease,
  colors
}) => (
  <View style={[styles.rowView, colors.borderColor]}>
    <Text style={[styles.rowText, colors.textColor]}>{label}:</Text>
    <View style={styles.adjusterView}>
      <View style={styles.adjusterValueView}>
        <Text style={[styles.rowText, colors.textColor]}>
          {value + ' ' + valueLabel}
        </Text>
      </View>
      <Button onPress={() => onDecrease()}>
        <Icon
          name="md-arrow-down"
          style={[styles.iconStyle, colors.buttonColor]}
        />
      </Button>
      <Button onPress={() => onIncrease()}>
        <Icon
          name="md-arrow-up"
          style={[styles.iconStyle, colors.buttonColor]}
        />
      </Button>
    </View>
  </View>
);
