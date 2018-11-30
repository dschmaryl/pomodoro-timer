import { StyleSheet } from 'react-native';

import { scaleSize, scaleFont } from '../../../device';

export const styles = StyleSheet.create({
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: scaleSize(0.05),
    paddingBottom: scaleSize(0.03),
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  headerText: {
    fontSize: scaleFont(46),
    fontFamily: 'Cookie-Regular'
  }
});
