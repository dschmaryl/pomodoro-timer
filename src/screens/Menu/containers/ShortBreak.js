import { connect } from 'react-redux';

import { showTimePicker } from '../../../actions/picker';
import { TimeAdjuster } from '../components/TimeAdjuster';

const mapStateToProps = state => ({
  label: 'Short break',
  time: state.timer.shortBreakTime,
  colors: state.settings.colors
});

mapDispatchToProps = dispatch => ({
  onPress: () => dispatch(showTimePicker('shortBreakTime'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeAdjuster);
