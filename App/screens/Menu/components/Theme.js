import React from 'react';
import { Text, TouchableNativeFeedback, View, Picker } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

export const Theme = ({ theme, themeIndex, setTheme, colors }) => (
  <View style={[styles.rowView, colors.borderColor]}>
    <Text style={[styles.rowText, colors.textColor]}>Color theme:</Text>
    <View style={styles.themeButtonContainer}>
      <View style={styles.adjusterView}>
        {/* <View style={styles.themeLabelView}>
          <Text style={[styles.rowText, colors.textColor]}>{theme}</Text>
        </View>
        <TouchableNativeFeedback onPress={nextTheme}>
          <View style={styles.buttonView}>
            <Icon
              name="md-arrow-up"
              style={[styles.iconStyle, colors.buttonColor]}
            />
          </View>
        </TouchableNativeFeedback> */}
        <Picker
          selectedValue={themeIndex}
          style={[styles.themePicker, colors.textColor]}
          textStyle={styles.rowText}
          onValueChange={itemValue => {
            console.log(itemValue);
            setTheme(itemValue);
          }}
        >
          <Picker.Item label="Cappuccino" value={0} />
          <Picker.Item label="Solarized" value={1} />
          <Picker.Item label="Monochrome" value={2} />
        </Picker>
      </View>
    </View>
  </View>
);
