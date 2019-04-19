import React from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { WheelPicker } from '@delightfulstudio/react-native-wheel-picker-android';
import Icon from 'react-native-vector-icons/Ionicons';

import { getMinSecs } from '../../../../utils';
import { scaleFontWithPixelRatio } from '../../../device';

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
  const minutesData = Array.from({ length: 100 }, (_, i) => '' + i);
  const secondsData = Array.from({ length: 60 }, (_, i) =>
    i < 10 ? '0' + i : '' + i
  );
  const wheelFontSize = scaleFontWithPixelRatio(36);

  return (
    <Modal
      visible={timePickerVisible}
      animationType="fade"
      transparent={true}
      onRequestClose={hidePicker}
    >
      <View style={styles.modalContainer}>
        <TouchableWithoutFeedback onPress={hidePicker}>
          <View
            style={[
              styles.modalTranslucentLayer,
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

          <View style={styles.timeWheelPickerContainer}>
            <WheelPicker
              data={minutesData}
              isCurved
              isAtmospheric
              visibleItemCount={5}
              selectedItemPosition={minutes}
              style={styles.timeMinutesWheelPicker}
              itemTextSize={wheelFontSize}
              itemTextColor={colors.textColor.color}
              selectedItemTextColor={colors.buttonColor.color}
              onItemSelected={item => setMinutes(item.position)}
            />

            <Text
              style={[styles.timeColon, { color: colors.buttonColor.color }]}
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
              style={styles.timeSecondsWheelPicker}
              itemTextSize={wheelFontSize}
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
