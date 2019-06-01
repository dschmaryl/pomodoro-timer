import { connect } from 'react-redux';

import { Notification } from '../components/Notification';

const mapStateToProps = state => ({
  sendNotification:
    !state.timer.isPaused &&
    state.settings.notificationIsEnabled &&
    state.timer.appState !== 'active',
  sessionString: state.timer.sessionString,
  endTime: state.timer.endTime
});

export default connect(mapStateToProps)(Notification);
