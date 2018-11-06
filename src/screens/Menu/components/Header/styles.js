import { StyleSheet } from 'react-native';

import { deviceWidth, deviceHeight } from '../../../device';

export const styles = StyleSheet.create({
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: deviceHeight * 0.03,
    paddingBottom: deviceHeight * 0.03,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  headerText: {
    fontSize: deviceWidth * 0.14,
    fontFamily: 'Cookie-Regular'
  }
});
