import { StyleSheet } from 'react-native';

import { deviceWidth, deviceHeight } from '../../../device';

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
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 2,
    height: deviceWidth * 0.6,
    width: deviceWidth * 0.6
  },

  closeButtonContainer: {
    alignItems: 'flex-end',
    width: deviceWidth * 0.6
  },

  closeButtonTouchable: {
    justifyContent: 'center',
    alignItems: 'center',
    height: deviceHeight * 0.08,
    width: deviceWidth * 0.12
  },

  closeButtonIcon: {
    fontSize: deviceWidth * 0.07
  },

  wheelPickerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: deviceHeight * 0.08
  },

  wheelPicker: {
    width: deviceWidth * 0.8,
    height: deviceHeight * 0.25
  },

  themePickerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: deviceHeight * 0.08
  },

  themeButtonTouchable: {
    padding: deviceHeight * 0.02
  },

  themeButtonText: {
    fontSize: deviceWidth * 0.05
  }
});
