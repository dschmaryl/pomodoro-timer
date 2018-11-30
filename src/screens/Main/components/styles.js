import { StyleSheet } from 'react-native';

import { scaleSize, scaleFont } from '../../device';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startContainer: {
    flex: 1,
    position: 'absolute',
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
    marginBottom: scaleSize(0.1),
    padding: scaleSize(0.004)
  },
  startHeaderText: {
    fontFamily: 'Cookie-Regular',
    fontSize: scaleFont(80),
    marginBottom: -scaleSize(0.05)
  },
  menuButtonTouchable: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: scaleSize(0.25),
    width: scaleSize(0.25),
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuButtonIcon: {
    fontSize: scaleFont(50)
  },
  sessionView: {
    alignItems: 'center',
    marginTop: scaleSize(0.06),
    marginBottom: scaleSize(0.025)
  },
  sessionText: {
    fontSize: scaleFont(36)
  },

  timeText: {
    fontSize: scaleFont(90)
  },

  mainButtonTouchable: {
    height: scaleSize(0.3),
    width: scaleSize(0.3),
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainButtonIcon: {
    fontSize: scaleFont(60)
  }
});
