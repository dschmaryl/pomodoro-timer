import { StyleSheet } from 'react-native';

import { deviceWidth, deviceHeight } from '../../device';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startContainer: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startHeaderView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: deviceHeight * 0.1,
    padding: deviceWidth * 0.004
  },
  startHeaderText: {
    fontFamily: 'Cookie-Regular',
    fontSize: deviceWidth * 0.25,
    marginBottom: -deviceHeight * 0.05
  },
  menuButtonTouchable: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: deviceWidth * 0.25,
    width: deviceWidth * 0.25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuButtonIcon: {
    fontSize: deviceWidth * 0.12
  },
  sessionView: {
    alignItems: 'center',
    marginTop: deviceHeight * 0.06,
    marginBottom: deviceHeight * 0.025
  },
  sessionText: {
    fontSize: deviceWidth * 0.1
  },

  timeView: {
    alignItems: 'center',
    width: deviceWidth * 0.6
  },
  timeText: {
    fontSize: (deviceWidth * 0.08) * 3
  },

  mainButtonTouchable: {
    height: deviceWidth * 0.3,
    width: deviceWidth * 0.3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainButtonIcon: {
    fontSize: deviceWidth * 0.16
  }
});
