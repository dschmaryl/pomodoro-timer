import React from 'react';
import { Text, TouchableNativeFeedback, View, Picker } from 'react-native';

import { styles } from './styles';

export const Theme = ({ theme, colors, setTheme }) => (
  <View style={[styles.rowView, colors.borderColor]}>
    <Text style={[styles.rowText, colors.textColor]}>Theme:</Text>
    <View style={styles.themeButtonContainer}>
      {/* <TouchableNativeFeedback onPress={() => setTheme('coffee')}>
        <View style={styles.themeButtonView}>
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
        <View style={styles.themeButtonView}>
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
      <TouchableNativeFeedback onPress={() => setTheme('mono')}>
        <View style={styles.themeButtonView}>
          <Text
            style={[
              styles.rowText,
              theme === 'mono'
                ? colors.buttonTextActive
                : colors.buttonTextInactive
            ]}
          >
            Mono
          </Text>
        </View>
      </TouchableNativeFeedback> */}
      {/* <Text style={styles.rowText}> */}
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
      {/* </Text> */}
    </View>
  </View>
);
