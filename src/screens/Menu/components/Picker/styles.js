import { StyleSheet } from 'react-native';

import { makeSize } from '../../../device';

const pickerViewWidth = makeSize(0.6);

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

  closeButtonContainer: {
    position: 'absolute',
    top: 0,
    right: 0
  },

  closeButtonTouchable: {
    justifyContent: 'center',
    alignItems: 'center',
    height: pickerViewWidth * 0.2,
    width: pickerViewWidth * 0.2
  },

  closeButtonIcon: {
    fontSize: makeSize(0.07)
  },

  wheelButtonView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: pickerViewWidth * 0.2,
    width: pickerViewWidth * 0.2
  },

  wheelPicker: {
    width: pickerViewWidth,
    height: pickerViewWidth * 0.9
  },

  themeButtonTouchable: {
    justifyContent: 'center',
    width: pickerViewWidth,
    height: pickerViewWidth * 0.26,
    paddingTop: pickerViewWidth * 0.05,
    paddingLeft: pickerViewWidth * 0.18
  },

  themeButtonText: {
    fontSize: makeSize(0.046)
  }
});
