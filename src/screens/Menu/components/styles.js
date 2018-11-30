import { StyleSheet } from 'react-native';

import { scaleSize, scaleFont } from '../../device';

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#222'
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: scaleSize(0.14),
    paddingHorizontal: scaleSize(0.03),
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  rowText: {
    fontSize: scaleFont(16)
  },

  timeText: {
    fontSize: scaleFont(25)
  },

  timerSideContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: scaleSize(0.31333)
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
    height: scaleSize(0.12),
    width: scaleSize(0.12)
  },
  iconStyle: {
    fontSize: scaleFont(22)
  },
  adjusterView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: scaleSize(0.4)
  },
  adjusterValueView: {
    alignItems: 'flex-end',
    paddingRight: scaleSize(0.04)
  },

  // switches
  switchView: {
    marginRight: scaleSize(0.06)
  },
  switch: {
    transform: [{ scaleX: scaleSize(0.0034) }, { scaleY: scaleSize(0.0034) }]
  }
});
