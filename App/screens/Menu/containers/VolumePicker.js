import { connect } from 'react-redux';

import { setVolume, hideVolumePicker } from '../../../actions';

import { Picker } from '../components/Picker';

data = Array(100)
  .fill()
  .map((_, i) => '-  ' + (i + 1) + '  -');

const mapStateToProps = state => ({
  pickerVisible: state.sound.volumePickerVisible,
  data: data,
  oldValue: state.sound.volume,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  hidePicker: () => dispatch(hideVolumePicker()),
  setValue: newVolume => dispatch(setVolume(newVolume))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Picker);
