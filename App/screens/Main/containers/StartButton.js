import { connect } from 'react-redux';

import { togglePaused } from '../../../actions';

import { StartButton } from '../components/StartButton';

const mapStateToProps = state => ({
  isPaused: state.timer.isPaused,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  togglePaused: () => dispatch(togglePaused())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartButton);
