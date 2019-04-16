import React from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { WheelPicker } from 'react-native-wheel-picker-android';
import Icon from 'react-native-vector-icons/Ionicons';

import { scaleFontWithPixelRatio } from '../../../device';

import { styles } from './styles';

export const Picker = ({
  pickerVisible,
  headerText,
  data,
  visibleItemCount,
  selectedItemPosition,
  isCyclic,
  onItemSelected,
  hidePicker,
  colors
}) => (
  <Modal
    visible={pickerVisible}
    animationType="fade"
    transparent={true}
    onRequestClose={hidePicker}
  >
    <View style={styles.modalContainer}>
      <TouchableWithoutFeedback onPress={hidePicker}>
        <View
          style={[styles.modalTranslucentLayer, { backgroundColor: '#000000' }]}
        />
      </TouchableWithoutFeedback>
      <View style={[styles.pickerView, colors.backgroundColor]}>
        <Text style={[styles.headerText, colors.textColor]}>{headerText}</Text>
        <WheelPicker
          data={data}
          isCyclic={isCyclic}
          isCurved
          isAtmospheric
          visibleItemCount={visibleItemCount}
          selectedItemPosition={selectedItemPosition}
          style={styles.wheelPicker}
          itemTextSize={scaleFontWithPixelRatio(24)}
          itemTextColor={colors.textColor.color}
          selectedItemTextColor={colors.buttonColor.color}
          onItemSelected={item => onItemSelected(item.position)}
        />

        <TouchableOpacity
          onPress={hidePicker}
          style={styles.doneButtonTouchable}
        >
          <Icon
            name="md-checkmark"
            style={[styles.doneButtonIcon, colors.buttonColor]}
          />
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);
