import { connect } from 'react-redux';

import { finishSession, backOneSession } from '../../../actions';

import { Session } from '../components/Session';

const mapStateToProps = state => ({
  pomodoro: state.timer.pomodoro,
  sessionString: state.timer.sessionString,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  nextSession: () => dispatch(finishSession()),
  previousSession: () => dispatch(backOneSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session);
