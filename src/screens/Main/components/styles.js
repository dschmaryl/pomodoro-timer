import { StyleSheet } from 'react-native';

import { makeSize } from '../../device';

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
    marginBottom: makeSize(0.1),
    padding: makeSize(0.004)
  },
  startHeaderText: {
    fontFamily: 'Cookie-Regular',
    fontSize: makeSize(0.25),
    marginBottom: -makeSize(0.05)
  },
  menuButtonTouchable: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: makeSize(0.25),
    width: makeSize(0.25),
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuButtonIcon: {
    fontSize: makeSize(0.14)
  },
  sessionView: {
    alignItems: 'center',
    marginTop: makeSize(0.06),
    marginBottom: makeSize(0.025)
  },
  sessionText: {
    fontSize: makeSize(0.1)
  },

  timeText: {
    fontSize: makeSize(0.26)
  },

  mainButtonTouchable: {
    height: makeSize(0.3),
    width: makeSize(0.3),
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainButtonIcon: {
    fontSize: makeSize(0.16)
  }
});
