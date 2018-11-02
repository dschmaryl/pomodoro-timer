import { connect } from 'react-redux';

import { timerTick } from '../../../actions';

import { Main } from '../components/Main';

const mapStateToProps = state => ({
  isPaused: state.timer.isPaused,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  timerTick: () => dispatch(timerTick())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
