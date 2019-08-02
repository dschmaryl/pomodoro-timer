import { connect } from 'react-redux';

import { Notification } from '../components/Notification';

const mapStateToProps = state => ({
  sendNotification:
    state.settings.notificationIsEnabled && state.timer.appState !== 'active',
  sessionString: state.timer.sessionString,
  isPaused: state.timer.isPaused,
  endTime: state.timer.endTime
});

export default connect(mapStateToProps)(Notification);
