import { StyleSheet } from 'react-native';

import { deviceWidth, deviceHeight } from '../device';

export const styles = StyleSheet.create({
  startContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startHeaderView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: deviceHeight * 0.1
  },
  startHeaderText: {
    fontFamily: 'Cookie-Regular',
    fontSize: deviceWidth * 0.25,
    marginBottom: -deviceHeight * 0.05
  }
  // startButtonContainer: {
  //   alignItems: 'center'
  // },
  // startButtonView: {
  //   marginTop: deviceHeight * 0.01,
  //   marginBottom: deviceHeight * 0.01
  // },
  // startButtonText: {
  //   fontSize: deviceWidth * 0.1
  // }
});
