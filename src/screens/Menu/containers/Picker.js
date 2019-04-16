import { connect } from 'react-redux';

import { setPickerValue, hidePicker } from '../../../actions/picker';
import { Picker } from '../components/Modals';

const mapStateToProps = state => ({
  pickerVisible: state.picker.pickerVisible,
  headerText: state.picker.headerText,
  data: state.picker.data,
  selectedItemPosition: state.picker.selectedItemPosition,
  visibleItemCount: state.picker.visibleItemCount,
  isCyclic: state.picker.isCyclic,
  colors: state.settings.colors
});

mapDispatchToProps = dispatch => ({
  onItemSelected: newValue => dispatch(setPickerValue(newValue)),
  hidePicker: () => dispatch(hidePicker())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Picker);
