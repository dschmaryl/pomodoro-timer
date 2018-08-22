import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';

import { styles } from './styles';

export const Theme = ({ theme, toggleTheme, colors }) => (
  <View style={[styles.rowView, colors.borderColor]}>
    <Text style={[styles.rowText, colors.textColor]}>Theme:</Text>
    <View style={styles.themeButtonContainer}>
      <TouchableNativeFeedback
        onPress={() => (theme === 'light' ? null : toggleTheme())}
      >
        <View style={styles.buttonView}>
          <Text
            style={[
              styles.rowText,
              theme === 'light'
                ? colors.buttonTextActive
                : colors.buttonTextInactive
            ]}
          >
            Light
          </Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => (theme === 'dark' ? null : toggleTheme())}
      >
        <View style={styles.buttonView}>
          <Text
            style={[
              styles.rowText,
              theme === 'dark'
                ? colors.buttonTextActive
                : colors.buttonTextInactive
            ]}
          >
            Dark
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  </View>
);
