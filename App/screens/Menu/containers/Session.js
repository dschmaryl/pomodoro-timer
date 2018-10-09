import { connect } from 'react-redux';

import {
  resetTimer,
  finishSession,
  backOneSession
} from '../../../actions';

import { Session } from '../components/Session';

const mapStateToProps = state => ({
  pomodoro: state.session.pomodoro,
  sessionString: state.session.sessionString,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  resetTimer: () => dispatch(resetTimer()),
  finishSession: () => dispatch(finishSession()),
  backOneSession: () => dispatch(backOneSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session);
