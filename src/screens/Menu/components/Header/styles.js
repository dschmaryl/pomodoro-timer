import { StyleSheet } from 'react-native';

import { scaleSize, scaleFont } from '../../../device';

export const styles = StyleSheet.create({
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: scaleSize(0.06),
    paddingBottom: scaleSize(0.02),
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  headerText: {
    fontSize: scaleFont(40),
    fontFamily: 'Cookie-Regular'
  }
});
