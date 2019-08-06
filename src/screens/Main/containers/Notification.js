import { connect } from 'react-redux';

import { Notification } from '../components/Notification';

const mapStateToProps = state => ({
  sendNotification:
    state.settings.notificationIsEnabled &&
    state.timer.appState !== 'active' &&
    !state.timer.isPaused,
  sessionString: state.timer.sessionString,
  endTime: state.timer.endTime
});

export default connect(mapStateToProps)(Notification);
