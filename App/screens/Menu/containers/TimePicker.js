import { connect } from 'react-redux';

import { setTime, hideTimePicker } from '../../../actions';

import { Picker } from '../components/Picker';

const data = Array(99)
  .fill()
  .map((_, i) => '-  ' + (i + 1) + '  -');

const mapStateToProps = state => ({
  pickerVisible: state.picker.timePickerVisible,
  data: data,
  session: state.picker.session,
  oldValue: state.picker.oldTime,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  hidePicker: () => dispatch(hideTimePicker()),
  setValue: (newTime, session) => dispatch(setTime(newTime, session))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Picker);
