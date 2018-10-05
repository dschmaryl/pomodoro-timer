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
    // height: deviceHeight,
    // width: deviceWidth,
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
    // height: deviceHeight,
    // width: deviceWidth,
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wheelPicker: {
    // position: 'absolute',
    // bottom: 0,
    height: deviceHeight * 0.1,
    width: deviceWidth * 0.4
  }
});
