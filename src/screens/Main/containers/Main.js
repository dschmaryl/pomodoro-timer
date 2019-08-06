import { connect } from 'react-redux';

import { setAppState, togglePaused } from '../../../actions/timer';
import { Main } from '../components/Main';

const mapStateToProps = state => ({
  colors: state.settings.colors,
  isPaused: state.timer.isPaused,
  runInBackground: state.settings.runInBackground
});

mapDispatchToProps = dispatch => ({
  setAppState: nextAppState => dispatch(setAppState(nextAppState)),
  togglePaused: () => dispatch(togglePaused())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
