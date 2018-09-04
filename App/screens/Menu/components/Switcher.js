import React from 'react';
import { Text, View, Switch } from 'react-native';

import { styles } from './styles';

export const Switcher = ({ label, isOn, colors, onToggle }) => (
  <View style={[styles.rowView, colors.borderColor]}>
    <Text style={[styles.rowText, colors.textColor]}>{label}:</Text>
    <View style={styles.switchView}>
      <Switch onValueChange={onToggle} value={isOn} style={styles.switch} />
    </View>
  </View>
);
