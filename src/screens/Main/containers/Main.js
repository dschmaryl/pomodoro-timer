import { connect } from 'react-redux';

import { setAppState, togglePaused } from '../../../actions/timer';
import { toggleRunInBackground } from '../../../actions/settings';
import { Main } from '../components/Main';

const mapStateToProps = state => ({
  colors: state.settings.colors,
  isPaused: state.timer.isPaused,
  runInBackground: state.settings.runInBackground, // to update persisted
  numPomodoros: state.timer.numPomodoros // to update persisted
});

mapDispatchToProps = dispatch => ({
  setAppState: nextAppState => dispatch(setAppState(nextAppState)),
  togglePaused: () => dispatch(togglePaused()),
  toggleRunInBackground: () => dispatch(toggleRunInBackground()),
  setNumPomodoros: () =>
    dispatch({ type: 'SET_NUM_POMODOROS', numPomodoros: 4 })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
