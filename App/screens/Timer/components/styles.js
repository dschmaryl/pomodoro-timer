import { StyleSheet } from 'react-native';

import { deviceWidth, deviceHeight } from '../../device';

export const styles = StyleSheet.create({
  timerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  settingsIconView: {
    position: 'absolute',
    top: deviceHeight * 0.03,
    right: deviceWidth * 0.05
  },
  settingsIconStyle: {
    fontSize: deviceWidth * 0.15
  },
  timerHeaderView: {
    alignItems: 'center',
    justifyContent: 'center',
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
  playIconView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: deviceHeight * 0.2,
    width: deviceWidth * 0.3
  },
  playIconStyle: {
    fontSize: deviceWidth * 0.15
  }
});
