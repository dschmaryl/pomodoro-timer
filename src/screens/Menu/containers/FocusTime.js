import { connect } from 'react-redux';

import { showTimePicker } from '../../../actions/picker';
import { TimeAdjuster } from '../components/TimeAdjuster';

const mapStateToProps = state => ({
  label: 'Focus time',
  time: state.timer.focusTime,
  colors: state.settings.colors
});

mapDispatchToProps = dispatch => ({
  onPress: () => dispatch(showTimePicker('focusTime'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeAdjuster);
