import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';

import { styles } from './styles';

export const LightDark = ({ lightDark, toggleLightDark, colors }) => (
  <View style={[styles.rowView, colors.borderColor]}>
    <Text style={[styles.rowText, colors.textColor]}>Light/Dark:</Text>
    <View style={styles.themeButtonContainer}>
      <TouchableNativeFeedback
        onPress={() => (lightDark === 'light' ? null : toggleLightDark())}
      >
        <View style={styles.themeButtonView}>
          <Text
            style={[
              styles.rowText,
              lightDark === 'light'
                ? colors.buttonTextActive
                : colors.buttonTextInactive
            ]}
          >
            Light
          </Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => (lightDark === 'dark' ? null : toggleLightDark())}
      >
        <View style={styles.themeButtonView}>
          <Text
            style={[
              styles.rowText,
              lightDark === 'dark'
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
