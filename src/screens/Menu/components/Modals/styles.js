import { StyleSheet } from 'react-native';

import { makeSize } from '../../../device';

const pickerViewWidth = makeSize(0.8);

export const styles = StyleSheet.create({
  pickerContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },

  pickerTranslucentLayer: {
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
    fontSize: pickerViewWidth * 0.13,
    paddingTop: pickerViewWidth * 0.08,
    paddingBottom: pickerViewWidth * 0.06
  },

  wheelPicker: {
    height: pickerViewWidth * 0.5,
    width: pickerViewWidth * 0.9
  },

  timePickerWheelContainer: {
    width: pickerViewWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  timePickerWheel: {
    height: pickerViewWidth * 0.5,
    width: pickerViewWidth * 0.38
  },

  pickerColon: {
    fontSize: pickerViewWidth * 0.14,
    paddingBottom: pickerViewWidth * 0.042,
    marginLeft: -pickerViewWidth * 0.08,
    marginRight: -pickerViewWidth * 0.08
  },

  doneButtonTouchable: {
    justifyContent: 'center',
    alignItems: 'center',
    height: pickerViewWidth * 0.3,
    width: pickerViewWidth * 0.3,
    paddingBottom: pickerViewWidth * 0.02
  },

  doneButtonIcon: {
    fontSize: pickerViewWidth * 0.18
  }
});
