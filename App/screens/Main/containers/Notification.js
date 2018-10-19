import { connect } from 'react-redux';

import {
  toggleNotificationScheduled,
  toggleNotificationClicked
} from '../../../actions';

import { Notification } from '../components/Notification';

const mapStateToProps = state => ({
  isPaused: state.timer.isPaused,
  endTime: state.timer.endTime,
  sessionString: state.session.sessionString,
  notificationIsEnabled: state.settings.notificationIsEnabled,
  // notificationIsScheduled: state.notification.notificationIsScheduled
});

const mapDispatchToProps = dispatch => ({
  // toggleNotificationScheduled: () => dispatch(toggleNotificationScheduled()),
  // toggleNotificationClicked: () => dispatch(toggleNotificationClicked())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
