import { connect } from 'react-redux';

import { setPickerValue, hidePicker } from '../../../actions/picker';

import { Picker } from '../components/Picker';

const mapStateToProps = state => ({
  pickerVisible: state.picker.pickerVisible,
  valueType: state.picker.valueType,
  data: state.picker.data,
  oldValue: state.picker.oldValue,
  selectedItemPosition: state.picker.selectedItemPosition,
  visibleItemCount: state.picker.visibleItemCount,
  isCyclic: state.picker.isCyclic,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  onItemSelected: newValue => dispatch(setPickerValue(newValue)),
  hidePicker: () => dispatch(hidePicker())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Picker);
