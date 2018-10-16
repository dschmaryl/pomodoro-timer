import { StyleSheet } from 'react-native';

import { deviceWidth, deviceHeight } from '../../device';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuTouchable: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: deviceWidth * 0.25,
    width: deviceWidth * 0.25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  timerHeaderView: {
    alignItems: 'center',
    marginTop: deviceHeight * 0.06,
    marginBottom: deviceHeight * 0.025
  },
  timerHeaderText: {
    fontSize: deviceWidth * 0.1
  },
  timerTimeView: {
    alignItems: 'center'
  },
  timerTimeText: {
    fontSize: deviceWidth * 0.25
  },
  playTouchable: {
    height: deviceWidth * 0.3,
    width: deviceWidth * 0.3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    fontSize: deviceWidth * 0.15
  }
});
