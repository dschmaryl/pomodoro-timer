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
    height: deviceHeight * 0.09,
    paddingHorizontal: deviceWidth * 0.03,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  rowText: {
    fontSize: deviceWidth * 0.045
  },

  timeView: {
    alignItems: 'center',
    width: deviceWidth * 0.31333
  },
  timeText: {
    fontSize: deviceWidth * 0.08
  },

  timerSideContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: deviceWidth * 0.31333
  },

  timerCenterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth * 0.31333
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
    paddingRight: deviceWidth * 0.04
  },

  // switches
  switchView: {
    marginRight: deviceWidth * 0.06
  },
  switch: {
    transform: [
      { scaleX: deviceWidth * 0.0034 },
      { scaleY: deviceWidth * 0.0034 }
    ]
  }
});
