import { StyleSheet } from 'react-native';

import { makeSize } from '../../device';

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#222'
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: makeSize(0.14),
    paddingHorizontal: makeSize(0.03),
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  rowText: {
    fontSize: makeSize(0.045)
  },

  timeText: {
    fontSize: makeSize(0.06)
  },

  timerSideContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: makeSize(0.31333)
  },

  timerCenterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  // buttons
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
    height: makeSize(0.12),
    width: makeSize(0.12)
  },
  iconStyle: {
    fontSize: makeSize(0.07)
  },
  adjusterView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: makeSize(0.4)
  },
  adjusterValueView: {
    alignItems: 'flex-end',
    paddingRight: makeSize(0.04)
  },

  // switches
  switchView: {
    marginRight: makeSize(0.06)
  },
  switch: {
    transform: [{ scaleX: makeSize(0.0034) }, { scaleY: makeSize(0.0034) }]
  }
});
