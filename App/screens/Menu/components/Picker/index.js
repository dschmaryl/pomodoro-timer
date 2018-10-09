import React from 'react';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { WheelPicker } from 'react-native-wheel-picker-android';

import { deviceWidth } from '../../../device';

import { styles } from './styles';

const Wrapper = ({ pickerVisible, hidePicker, colors, children }) => {
  if (pickerVisible) {
    return (
      <View style={styles.pickerContainer}>
        <TouchableWithoutFeedback onPress={hidePicker}>
          <View
            style={[
              styles.pickerTranslucentLayer,
              { backgroundColor: '#000000' }
            ]}
          />
        </TouchableWithoutFeedback>
        <View style={[styles.pickerView, colors.backgroundColor]}>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity
              onPress={hidePicker}
              style={styles.closeButtonTouchable}
            >
              <Icon
                name="md-close"
                style={[styles.closeButtonIcon, colors.textColor]}
              />
            </TouchableOpacity>
          </View>
          {children}
        </View>
      </View>
    );
  } else {
    return null;
  }
};

export const Picker = ({
  pickerVisible,
  data,
  oldValue,
  setValue,
  hidePicker,
  colors
}) => (
  <Wrapper
    pickerVisible={pickerVisible}
    hidePicker={hidePicker}
    colors={colors}
  >
    <View style={styles.wheelPickerContainer}>
      <WheelPicker
        data={data}
        isCurved
        isAtmospheric
        visibleItemCount={9}
        selectedItemPosition={oldValue - 1}
        style={styles.wheelPicker}
        itemTextSize={deviceWidth * 0.12}
        itemTextColor={colors.textColor.color}
        selectedItemTextColor={colors.buttonColor.color}
        onItemSelected={itemValue => setValue(itemValue.position + 1)}
      />
    </View>
  </Wrapper>
);

export const ThemePicker = ({
  themePickerVisible,
  themeIndex,
  setTheme,
  hideThemePicker,
  colors
}) => (
  <Wrapper
    pickerVisible={themePickerVisible}
    hidePicker={hideThemePicker}
    colors={colors}
  >
    <View style={[styles.themePickerContainer, colors.backgroundColor]}>
      <TouchableOpacity
        onPress={() => setTheme(0)}
        style={styles.themeButtonTouchable}
      >
        <Text
          style={[
            styles.themeButtonText,
            themeIndex === 0 ? colors.buttonColor : colors.textColor
          ]}
        >
          Cappuccino
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setTheme(1)}
        style={styles.themeButtonTouchable}
      >
        <Text
          style={[
            styles.themeButtonText,
            themeIndex === 1 ? colors.buttonColor : colors.textColor
          ]}
        >
          Solarized
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setTheme(2)}
        style={styles.themeButtonTouchable}
      >
        <Text
          style={[
            styles.themeButtonText,
            themeIndex === 2 ? colors.buttonColor : colors.textColor
          ]}
        >
          Monochrome
        </Text>
      </TouchableOpacity>
    </View>
  </Wrapper>
);
