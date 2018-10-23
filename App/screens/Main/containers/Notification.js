import { connect } from 'react-redux';

import { Notification } from '../components/Notification';

const mapStateToProps = state => ({
  isPaused: state.timer.isPaused,
  endTime: state.timer.endTime,
  sessionString: state.timer.sessionString,
  notificationIsEnabled: state.settings.notificationIsEnabled
});

export default connect(mapStateToProps)(Notification);
