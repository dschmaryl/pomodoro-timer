import { StyleSheet } from 'react-native';

import { deviceWidth, deviceHeight } from '../../../device';

export const styles = StyleSheet.create({
  footerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: deviceHeight * 0.09,
    paddingTop: deviceHeight * 0.03,
    paddingBottom: deviceHeight * 0.03
  },
  footerText: {
    fontSize: deviceWidth * 0.06,
    fontFamily: 'Cookie-Regular'
  },
  footerTouchable: {
    justifyContent: 'center',
    height: deviceHeight * 0.08
  }
});
