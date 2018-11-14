import React from 'react';
import {
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { WheelPicker } from 'react-native-wheel-picker-android';
import Icon from 'react-native-vector-icons/Ionicons';

import { makeSize } from '../../../device';

import { styles } from './styles';

export const TimePicker = ({
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
          <Text>Focus</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          />
          <View style={styles.pickerWheelContainer}>
            <WheelPicker
              data={data}
              isCyclic={isCyclic}
              isCurved
              isAtmospheric
              visibleItemCount={visibleItemCount}
              selectedItemPosition={selectedItemPosition}
              // style={styles.wheelPicker}
              style={{ height: makeSize(0.4), width: makeSize(0.14) }}
              itemTextSize={makeSize(0.12)}
              itemTextColor={colors.textColor.color}
              selectedItemTextColor={colors.buttonColor.color}
              onItemSelected={item => onItemSelected(item.position)}
            />
            <Text>min</Text>
            <WheelPicker
              data={data}
              isCyclic={isCyclic}
              isCurved
              isAtmospheric
              visibleItemCount={visibleItemCount}
              selectedItemPosition={selectedItemPosition}
              // style={styles.wheelPicker}
              style={{ height: makeSize(0.4), width: makeSize(0.14) }}
              itemTextSize={makeSize(0.12)}
              itemTextColor={colors.textColor.color}
              selectedItemTextColor={colors.buttonColor.color}
              onItemSelected={item => onItemSelected(item.position)}
            />
            <Text>sec</Text>
          </View>

          <View style={styles.doneButtonContainer}>
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

      </View>
    </Modal>
  </View>
);
