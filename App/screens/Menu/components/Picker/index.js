import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import { WheelPicker } from 'react-native-wheel-picker-android';

import { deviceWidth } from '../../../device';

import { styles } from './styles';

export const Picker = ({
  showPicker,
  data,
  selectedIndex,
  onSelect,
  colors,
  hidePicker
}) => {
  if (showPicker) {
    return (
      // <View style={styles.pickerContainer}>
      // {/* <TouchableWithoutFeedback onPress={hidePicker}>
      //   <View
      //     style={[styles.pickerTranslucentLayer, colors.backgroundColor]}
      //   />
      // </TouchableWithoutFeedback> */}
      <WheelPicker
        data={data}
        isCurved
        isCyclic
        isAtmospheric
        visibleItemCount={3}
        selectedItemPosition={selectedIndex}
        style={styles.wheelPicker}
        itemTextSize={deviceWidth * 0.12}
        backgroundColor={colors.backgroundColor.backgroundColor}
        itemTextColor={colors.textColor.color}
        selectedItemTextColor={colors.buttonColor.color}
        onItemSelected={itemValue => onSelect(itemValue)}
      />
      // </View>
    );
  } else {
    return null;
  }
};
