import { connect } from 'react-redux';

import { setTime, hideTimePicker } from '../../../actions';

import { Picker } from '../components/Picker';

const data = Array(99)
  .fill()
  .map((_, i) => '-  ' + (i + 1) + '  -');

const mapStateToProps = state => ({
  pickerVisible: state.times.timePickerVisible,
  data: data,
  oldValue: state.times.oldTime,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  hidePicker: () => dispatch(hideTimePicker()),
  setValue: newTime => dispatch(setTime(newTime))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Picker);
