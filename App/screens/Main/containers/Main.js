import { connect } from 'react-redux';

import { timerTick, toggleAppState } from '../../../actions';

import { Main } from '../components/Main';

const mapStateToProps = state => ({
  appIsActive: state.timer.appIsActive,
  isPaused: state.timer.isPaused,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  timerTick: () => dispatch(timerTick()),
  toggleAppState: () => dispatch(toggleAppState())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
