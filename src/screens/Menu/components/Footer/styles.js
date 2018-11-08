import { StyleSheet } from 'react-native';

import { makeSize } from '../../../device';

export const styles = StyleSheet.create({
  footerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: makeSize(0.13)
  },
  footerText: {
    fontSize: makeSize(0.06),
    fontFamily: 'Cookie-Regular'
  },
  footerTouchable: {
    justifyContent: 'center',
    height: makeSize(0.12)
  }
});
