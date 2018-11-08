import { StyleSheet } from 'react-native';

import { makeSize } from '../../../device';

export const styles = StyleSheet.create({
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: makeSize(0.05),
    paddingBottom: makeSize(0.03),
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  headerText: {
    fontSize: makeSize(0.14),
    fontFamily: 'Cookie-Regular'
  }
});
