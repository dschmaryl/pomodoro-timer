import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import Switch from 'react-native-switch-pro';

import { styles } from './styles';

export const Switcher = ({ label, isOn, colors, onToggle }) => (
  <TouchableNativeFeedback onPress={onToggle}>
    <View style={[styles.rowView, colors.borderColor]}>
      <Text style={[styles.rowText, colors.textColor]}>{label}:</Text>
      <View style={styles.switchView}>
        <Switch
          onSyncPress={onToggle}
          value={isOn}
          style={styles.switch}
          circleColorActive={colors.backgroundColor.backgroundColor}
          circleColorInactive={colors.backgroundColor.backgroundColor}
          backgroundActive={colors.buttonColor.color}
          backgroundInactive={colors.borderColor.borderColor}
        />
      </View>
    </View>
  </TouchableNativeFeedback>
);
