import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import Switch from 'react-native-switch-pro';

import { styles } from './styles';

export const Switcher = ({ label, isOn, onToggle, disabled, colors }) => {
  const textColor = disabled ? colors.disabledColor : colors.textColor;
  const buttonColor = disabled
    ? colors.disabledColor.color
    : colors.buttonColor.color;

  return (
    <TouchableNativeFeedback disabled={disabled} onPress={onToggle}>
      <View style={[styles.rowView, colors.borderColor]}>
        <Text style={[styles.rowText, textColor]}>{label}:</Text>
        <View style={styles.switchView}>
          <Switch
            onSyncPress={onToggle}
            value={isOn}
            style={styles.switch}
            circleColorActive={colors.backgroundColor.backgroundColor}
            circleColorInactive={colors.backgroundColor.backgroundColor}
            backgroundActive={buttonColor}
            backgroundInactive={colors.borderColor.borderColor}
            disabled={disabled}
          />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};
