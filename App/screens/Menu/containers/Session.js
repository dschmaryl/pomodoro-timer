import { connect } from 'react-redux';

import { nextSession, backOneSession } from '../../../actions';

import { Session } from '../components/Session';

const mapStateToProps = state => ({
  pomodoro: state.timer.pomodoro,
  sessionString: state.timer.sessionString,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  nextSession: () => dispatch(nextSession()),
  previousSession: () => dispatch(backOneSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session);
