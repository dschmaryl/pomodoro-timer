import { StyleSheet } from 'react-native';

import { deviceWidth, deviceHeight } from '../../device';

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#222'
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: deviceHeight * 0.1,
    // paddingHorizontal: deviceWidth * 0.04,
    paddingHorizontal: deviceWidth * 0.04,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  rowText: {
    fontSize: deviceWidth * 0.05
  },
  timerText: {
    fontSize: deviceWidth * 0.075
  },

  // buttons
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
    height: deviceHeight * 0.08,
    width: deviceWidth * 0.12
  },
  iconStyle: {
    fontSize: deviceWidth * 0.07
  },
  adjusterView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: deviceWidth * 0.4
  },
  adjusterValueView: {
    alignItems: 'flex-end',
    // width: deviceWidth * 0.2,
    paddingRight: deviceWidth * 0.04
  },

  // switches
  switchView: {
    marginRight: deviceWidth * 0.06
  },
  switch: {
    transform: [
      { scaleX: deviceWidth * 0.0035 },
      { scaleY: deviceWidth * 0.0035 }
    ]
  }
});
