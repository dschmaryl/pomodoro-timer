import { StyleSheet } from 'react-native';

import { scaleSize, scaleFont } from '../../../device';

const pickerViewWidth = scaleSize(0.8);

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },

  modalTranslucentLayer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center'
  },

  pickerView: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    height: pickerViewWidth,
    width: pickerViewWidth
  },

  headerText: {
    fontFamily: 'Cookie-Regular',
    fontSize: scaleFont(40),
    paddingTop: pickerViewWidth * 0.08,
    paddingBottom: pickerViewWidth * 0.06
  },

  wheelPicker: {
    height: pickerViewWidth * 0.5,
    width: pickerViewWidth * 0.9
  },

  timeWheelPickerContainer: {
    width: pickerViewWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  timeMinutesWheelPicker: {
    zIndex: 3,
    height: pickerViewWidth * 0.5,
    width: pickerViewWidth * 0.38
  },
  timeSecondsWheelPicker: {
    zIndex: 2,
    height: pickerViewWidth * 0.5,
    width: pickerViewWidth * 0.38
  },
  timeColon: {
    zIndex: 1,
    fontSize: scaleFont(38),
    paddingBottom: pickerViewWidth * 0.036,
    marginLeft: -pickerViewWidth * 0.08,
    marginRight: -pickerViewWidth * 0.08
  },

  doneButtonTouchable: {
    justifyContent: 'center',
    alignItems: 'center',
    height: pickerViewWidth * 0.3,
    width: pickerViewWidth * 0.3
  },

  doneButtonIcon: {
    fontSize: scaleFont(56)
  }
});
