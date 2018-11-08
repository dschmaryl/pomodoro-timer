import React from 'react';
import {
  Modal,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { WheelPicker } from 'react-native-wheel-picker-android';
import Icon from 'react-native-vector-icons/Ionicons';

import { makeSize } from '../../../device';

import { styles } from './styles';

export const Picker = ({
  pickerVisible,
  data,
  visibleItemCount,
  selectedItemPosition,
  isCyclic,
  onItemSelected,
  hidePicker,
  colors
}) => (
  <View style={styles.pickerContainer}>
    <Modal
      visible={pickerVisible}
      animationType="fade"
      transparent={true}
      onRequestClose={hidePicker}
    >
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
            itemTextSize={makeSize(0.12)}
            itemTextColor={colors.textColor.color}
            selectedItemTextColor={colors.buttonColor.color}
            onItemSelected={item => onItemSelected(item.position)}
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
    </Modal>
  </View>
);
