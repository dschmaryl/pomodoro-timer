import React from 'react';
import { Text, View } from 'react-native';
import Switch from 'react-native-switch-pro';

import { styles } from './styles';

export const Switcher = ({ label, isOn, colors, onToggle }) => (
  <View style={[styles.rowView, colors.borderColor]}>
    <Text style={[styles.rowText, colors.textColor]}>{label}:</Text>
    <View style={styles.switchView}>
      <Switch
        onSyncPress={onToggle}
        value={isOn}
        style={styles.switch}
        circleStyle={styles.switchCircleStyle}
        circleColorActive={colors.backgroundColor.backgroundColor}
        circleColorInactive={colors.backgroundColor.backgroundColor}
        backgroundActive={colors.buttonTextActive.color}
        backgroundInactive={colors.borderColor.borderColor}
      />
    </View>
  </View>
);
