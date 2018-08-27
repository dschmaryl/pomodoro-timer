import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';

import { styles } from './styles';

export const Theme = ({ theme, setTheme, colors }) => (
  <View style={[styles.rowView, colors.borderColor]}>
    <Text style={[styles.rowText, colors.textColor]}>Theme:</Text>
    <View style={styles.themeButtonContainer}>
      <TouchableNativeFeedback onPress={() => setTheme('coffee')}>
        <View style={styles.buttonView}>
          <Text
            style={[
              styles.rowText,
              theme === 'coffee'
                ? colors.buttonTextActive
                : colors.buttonTextInactive
            ]}
          >
            Coffee
          </Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => setTheme('solarized')}>
        <View style={styles.buttonView}>
          <Text
            style={[
              styles.rowText,
              theme === 'solarized'
                ? colors.buttonTextActive
                : colors.buttonTextInactive
            ]}
          >
            Solarized
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  </View>
);
