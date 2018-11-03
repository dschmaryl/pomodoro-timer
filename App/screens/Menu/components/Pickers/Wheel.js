import React from 'react';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { WheelPicker } from 'react-native-wheel-picker-android';
import Icon from 'react-native-vector-icons/Ionicons';

import { deviceWidth } from '../../../device';

import { styles } from './styles';

export const Wheel = ({
  pickerVisible,
  data,
  isCyclic,
  visibleItemCount,
  selectedItemPosition,
  onItemSelected,
  hidePicker,
  colors
}) => {
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
          <WheelPicker
            data={data}
            isCyclic={isCyclic}
            isCurved
            isAtmospheric
            visibleItemCount={visibleItemCount}
            selectedItemPosition={selectedItemPosition}
            style={styles.wheelPicker}
            itemTextSize={deviceWidth * 0.12}
            itemTextColor={colors.textColor.color}
            selectedItemTextColor={colors.buttonColor.color}
            onItemSelected={itemValue => onItemSelected(itemValue)}
          />
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
        <TouchableNativeFeedback onPress={hidePicker}>
          <View style={styles.wheelButtonView} />
        </TouchableNativeFeedback>
      </View>
    );
  } else {
    return null;
  }
};
