import { connect } from 'react-redux';

import { updateTime, finishSession } from '../../../actions';

import { Main } from '../components/Main';

const mapStateToProps = state => ({
  endTime: state.timer.endTime,
  isPaused: state.timer.isPaused,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  updateTime: (minutes, seconds) => dispatch(updateTime(minutes, seconds)),
  finishSession: finishedActive => dispatch(finishSession(finishedActive))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
