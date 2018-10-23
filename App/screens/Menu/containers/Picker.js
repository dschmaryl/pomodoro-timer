import { connect } from 'react-redux';

import { setPickerValue, hidePicker } from '../../../actions';

import { Picker } from '../components/Picker';

const mapStateToProps = state => ({
  pickerVisible: state.picker.pickerVisible,
  oldValue: state.picker.oldValue,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  setValue: newValue => dispatch(setPickerValue(newValue)),
  hidePicker: () => dispatch(hidePicker())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Picker);
