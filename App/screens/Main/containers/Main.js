import { connect } from 'react-redux';

import {
  setTimer,
  togglePaused,
  updateTime,
  finishSession,
  toggleSoundPlaying,
  toggleNotificationClicked
} from '../../../actions';

import { Main } from '../components/Main';

const mapStateToProps = state => ({
  focusTime: state.times.focusTime,
  shortBreakTime: state.times.shortBreakTime,
  longBreakTime: state.times.longBreakTime,
  session: state.session.session,
  endTime: state.timer.endTime,
  timeLeft: state.timer.timeLeft,
  isPaused: state.timer.isPaused,
  pauseAtSessionEnd: state.session.pauseAtSessionEnd,
  soundIsEnabled: state.sound.soundIsEnabled,
  soundIsPlaying: state.sound.soundIsPlaying,
  notificationClicked: state.notification.notificationClicked,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  setTimer: (minutes, seconds) => dispatch(setTimer(minutes, seconds)),
  togglePaused: () => dispatch(togglePaused()),
  updateTime: (minutes, seconds) => dispatch(updateTime(minutes, seconds)),
  finishSession: () => dispatch(finishSession()),
  toggleSoundPlaying: () => dispatch(toggleSoundPlaying()),
  toggleNotificationClicked: () => dispatch(toggleNotificationClicked())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
