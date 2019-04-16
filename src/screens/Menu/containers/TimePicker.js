import { connect } from 'react-redux';

import { setMinutes, setSeconds, hidePicker } from '../../../actions/picker';
import { TimePicker } from '../components/Modals';

const mapStateToProps = state => ({
  timePickerVisible: state.picker.timePickerVisible,
  sessionType: state.picker.sessionType,
  oldTime: state.picker.oldTime,
  colors: state.settings.colors
});

mapDispatchToProps = dispatch => ({
  setMinutes: newValue => dispatch(setMinutes(newValue)),
  setSeconds: newValue => dispatch(setSeconds(newValue)),
  hidePicker: () => dispatch(hidePicker())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimePicker);
