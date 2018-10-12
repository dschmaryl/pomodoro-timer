import { connect } from 'react-redux';

import { showVolumePicker } from '../../../actions';

import { Adjuster } from '../components/Adjuster';

const mapStateToProps = state => ({
  label: 'Volume',
  value: state.sound.volume,
  valueLabel: ' %',
  disabled: !state.sound.soundIsEnabled,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  onPress: oldVolume => dispatch(showVolumePicker(oldVolume))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adjuster);
