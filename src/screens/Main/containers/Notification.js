import { connect } from 'react-redux';

import { toggleSessionEnded } from '../../../actions/timer';

import { Notification } from '../components/Notification';

const mapStateToProps = state => ({
  sendNotification:
    state.timer.sessionEnded &&
    state.settings.notificationIsEnabled &&
    state.timer.appState !== 'active',
  sessionString: state.timer.sessionString
});

const mapDispatchToProps = dispatch => ({
  toggleSessionEnded: () => dispatch(toggleSessionEnded())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
