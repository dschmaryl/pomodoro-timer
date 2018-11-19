import { connect } from 'react-redux';

import { showTimePicker } from '../../../actions/picker';
import { TimeAdjuster } from '../components/TimeAdjuster';

const mapStateToProps = state => ({
  label: 'Long break',
  time: state.timer.longBreakTime,
  colors: state.settings.colors
});

mapDispatchToProps = dispatch => ({
  onPress: () => dispatch(showTimePicker('longBreakTime'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeAdjuster);
