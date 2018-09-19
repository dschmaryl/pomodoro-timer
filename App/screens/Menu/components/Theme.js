import React from 'react';
import { Text, View, Picker } from 'react-native';
// import { Text, TouchableNativeFeedback, View } from 'react-native';

import { styles } from './styles';

export const Theme = ({ theme, colors, setTheme }) => (
  <View style={[styles.rowView, colors.borderColor]}>
    <Text style={[styles.rowText, colors.textColor]}>Color theme:</Text>
    <View style={styles.themeButtonContainer}>
      <Picker
        selectedValue={theme}
        style={[styles.themePicker, colors.textColor]}
        textStyle={styles.rowText}
        onValueChange={itemValue => setTheme(itemValue)}
      >
        <Picker.Item label="Cappuccino" value="coffee" />
        <Picker.Item label="Solarized" value="solarized" />
        <Picker.Item label="Monochrome" value="mono" />
      </Picker>
    </View>
  </View>
);
