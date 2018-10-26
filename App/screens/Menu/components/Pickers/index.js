import React from 'react';
import {
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { WheelPicker } from 'react-native-wheel-picker-android';

import { deviceWidth } from '../../../device';
import { themes } from '../../../../themes';

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
          {children}
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity
              onPress={hidePicker}
              style={styles.closeButtonTouchable}
            >
              <Icon
                name="md-close"
                style={[styles.closeButtonIcon, colors.buttonColor]}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

export const NumberPicker = ({
  pickerVisible,
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
    <WheelPicker
      data={Array(100)
        .fill()
        .map((_, i) => '-  ' + (i + 1) + '  -')}
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
    <TouchableNativeFeedback onPress={hidePicker}>
      <View style={styles.wheelButtonView} />
    </TouchableNativeFeedback>
  </Wrapper>
);

export const ThemePicker = ({
  themePickerVisible,
  currentThemeIndex,
  setTheme,
  hideThemePicker,
  colors
}) => (
  <Wrapper
    pickerVisible={themePickerVisible}
    hidePicker={hideThemePicker}
    colors={colors}
  >
    <WheelPicker
      data={themes.map(theme => theme.name)}
      isCyclic
      isCurved
      isAtmospheric
      visibleItemCount={5}
      selectedItemPosition={currentThemeIndex}
      style={styles.wheelPicker}
      itemTextSize={deviceWidth * 0.12}
      itemTextColor={colors.textColor.color}
      selectedItemTextColor={colors.buttonColor.color}
      onItemSelected={itemValue => setTheme(itemValue.position)}
    />
    <TouchableNativeFeedback onPress={hideThemePicker}>
      <View style={styles.wheelButtonView} />
    </TouchableNativeFeedback>
  </Wrapper>
);
