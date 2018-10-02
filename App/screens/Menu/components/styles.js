import { StyleSheet } from 'react-native';

import { deviceWidth, deviceHeight } from '../../device';

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#222'
  },
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
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: deviceHeight * 0.1,
    paddingHorizontal: deviceWidth * 0.04,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  rowText: {
    fontSize: deviceWidth * 0.05
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
  timerText: {
    fontSize: deviceWidth * 0.075
  },
  adjusterView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: deviceWidth * 0.5
  },
  adjusterValueView: {
    alignItems: 'flex-end',
    width: deviceWidth * 0.2,
    paddingRight: deviceWidth * 0.04
  },

  // switches
  switchView: {
    marginRight: deviceWidth * 0.07
  },
  switch: {
    transform: [
      { scaleX: deviceWidth * 0.0036 },
      { scaleY: deviceWidth * 0.0036 }
    ]
  },

  // themes
  themeLabelView: {
    alignItems: 'center',
    width: deviceWidth * 0.3,
    paddingRight: deviceWidth * 0.04
  },
  themeButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: deviceWidth * 0.5,
    marginRight: deviceWidth * 0.02
  },
  themeButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: deviceHeight * 0.08,
    width: deviceWidth * 0.22
  },
  themePicker: {
    width: deviceWidth * 0.4,
    transform: [
      { scaleX: deviceWidth * 0.003 },
      { scaleY: deviceWidth * 0.003 }
    ]
  },

  // footer
  footerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: deviceHeight * 0.1,
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
