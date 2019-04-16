import { connect } from 'react-redux';

import { nextSession, backOneSession } from '../../../actions/timer';
import { Session } from '../components/Session';

const mapStateToProps = state => ({
  pomodoro: state.timer.pomodoro,
  sessionString: state.timer.sessionString,
  colors: state.settings.colors
});

mapDispatchToProps = dispatch => ({
  nextSession: () => dispatch(nextSession()),
  previousSession: () => dispatch(backOneSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session);
