import { StyleSheet } from 'react-native';

import { scaleSize, scaleFont } from '../../../device';

export const styles = StyleSheet.create({
  footerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: scaleSize(0.13)
  },
  footerText: {
    fontSize: scaleFont(24),
    fontFamily: 'Cookie-Regular'
  },
  footerTouchable: {
    justifyContent: 'center',
    height: scaleSize(0.12)
  }
});
