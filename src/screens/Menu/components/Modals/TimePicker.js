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

import { getMinSecs } from '../../../../utils';
import { makeSize } from '../../../device';

import { styles } from './styles';

export const TimePicker = ({
  timePickerVisible,
  sessionType,
  oldTime,
  setMinutes,
  setSeconds,
  hidePicker,
  colors
}) => {
  const { minutes, seconds } = getMinSecs(oldTime);
  const minutesData = Array.from({ length: 99 }, (_, i) => i + 1);
  const secondsData = Array.from({ length: 60 }, (_, i) =>
    i < 10 ? '0' + i : '' + i
  );

  return (
    <Modal
      visible={timePickerVisible}
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
          <Text style={[styles.headerText, colors.textColor]}>
            {sessionType === 'focusTime'
              ? 'Focus time length'
              : sessionType === 'shortBreakTime'
              ? 'Short break length'
              : 'Long break length'}
          </Text>

          <View style={styles.timePickerWheelContainer}>
            <WheelPicker
              data={minutesData}
              isCurved
              isAtmospheric
              visibleItemCount={5}
              selectedItemPosition={minutes - 1}
              style={styles.timePickerWheel}
              itemTextSize={makeSize(0.28)}
              itemTextColor={colors.textColor.color}
              selectedItemTextColor={colors.buttonColor.color}
              onItemSelected={item => setMinutes(item.position + 1)}
            />
            <Text
              style={[styles.pickerColon, { color: colors.buttonColor.color }]}
            >
              :
            </Text>
            <WheelPicker
              data={secondsData}
              isCurved
              isCyclic
              isAtmospheric
              visibleItemCount={5}
              selectedItemPosition={seconds}
              style={styles.timePickerWheel}
              itemTextSize={makeSize(0.28)}
              itemTextColor={colors.textColor.color}
              selectedItemTextColor={colors.buttonColor.color}
              onItemSelected={item => setSeconds(item.position)}
            />
          </View>

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
};
